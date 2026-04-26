import axios from 'axios';
import { env } from '../config/env';
import { getAccessToken, removeTokens } from '../auth';
import router from '../../router';

// Instância base do Axios
export const api = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
  // Se for usar Cookies para o token (ideal contra XSS):
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de Requisição (Request)
api.interceptors.request.use(
  (config) => {
    // Caso utilize token armazenado no frontend (via localStorage ou Memória),
    // é aqui que você anexa na requisição.
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Flag para evitar múltiplas chamadas de refresh simultâneas
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Interceptor de Resposta (Response)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Tratamento de 401 Unauthorized (Token Expirado ou Inválido)
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Enfileira as requisições se já estiver renovando o token
        return new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return api(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Exemplo conceitual da chamada de Refresh Token
        // const { data } = await axios.post(`${env.API_URL}/refresh-token`, { ... });
        // const newToken = data.token;
        // setAccessToken(newToken);
        
        // Simulação de sucesso no refresh:
        const newToken = "novo_token_aqui"; 
        
        api.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
        originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
        
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        // Se falhar o refresh, desloga e manda pro Login
        removeTokens();
        router.push({ name: 'login' });
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // Outros erros genéricos podem disparar um toast de erro global aqui
    return Promise.reject(error);
  }
);

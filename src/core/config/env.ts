export const env = {
  // O Vite expõe variáveis de ambiente que começam com VITE_ através de import.meta.env
  // NUNCA coloque tokens, senhas ou chaves secretas (como chaves de Stripe ou AWS) no frontend
  
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Frontend Base',

  get isProduction() {
    return this.APP_ENV === 'production';
  },

  get isDevelopment() {
    return this.APP_ENV === 'development';
  }
};

export const TOKEN_KEY = '@App:accessToken';

export function getAccessToken(): string | null {
  // NOTA DE SEGURANÇA: localStorage é vulnerável a XSS. 
  // Em uma aplicação crítica, prefira usar HttpOnly Cookies definidos pelo backend.
  return localStorage.getItem(TOKEN_KEY);
}

export function setAccessToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeTokens(): void {
  localStorage.removeItem(TOKEN_KEY);
  // Limpar outros dados de sessão, se houver (ex: refreshToken se usar localStorage)
}

export function isAuthenticated(): boolean {
  return !!getAccessToken();
}

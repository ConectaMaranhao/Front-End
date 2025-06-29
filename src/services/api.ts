import axios from 'axios';

const API_URL = 'https://conectamaranhao.onrender.com';

export const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para adicionar o token JWT no cabeçalho Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Autenticação
export const registrar = (data: any) => api.post('/registrar', data);
export const login = (data: any) => api.post('/login', data);

// Recursos protegidos
export const criarConta = (data: any) => api.post('/contas', data);
export const criarPessoa = (data: any) => api.post('/pessoas', data);
/*export const criarEmpresa = (data: any) => api.post('/empresas', data);*/
export const buscarPessoaPorId = (id: string) => api.get(`/pessoas/${id}`); 

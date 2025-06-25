import axios from 'axios';

const API_URL = 'https://conectamaranhao.onrender.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const criarUsuario = (data: any) => api.post('/usuarios', data);

export const criarConta = (data: any) => api.post('/contas', data);

export const criarPessoa = (data: any) => api.post('/pessoas', data);

export const criarEmpresa = (data: any) => api.post('/empresas', data);

export const buscarPessoaPorId = (id: string) => api.get(`/pessoas/${id}`); 
import axios from 'axios';
import { CepResponse, CreateUserParams } from './types';

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const setToken = (token:string) => {
  api.defaults.headers.common.Authorization = token;
};

export const get = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const post = async (endpoint: string, data: CreateUserParams) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const consultaCep = async (cep: string): Promise<CepResponse> => {
  const formatedCep = cep.replace(/-/g, '');
  try {
    const endpointCep = `http://viacep.com.br/ws/${formatedCep}/json/`

    const result = await get(endpointCep);

    return result;
  } catch (error: any) {
   return error;
  }
}

export default api;
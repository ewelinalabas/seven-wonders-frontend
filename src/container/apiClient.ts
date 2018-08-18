import axios, { AxiosInstance } from 'axios';
import { selectBackendApiUrl } from 'selector/apiSelector';

export const apiClient: AxiosInstance = axios.create({
  baseURL: selectBackendApiUrl(),
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    'token-type': localStorage.getItem('token-type'),
    uid: localStorage.getItem('uid')
  }
});

apiClient.interceptors.response.use(response => {
  localStorage.setItem('access-token', response.headers['access-token']);
  localStorage.setItem('client', response.headers['client']);
  localStorage.setItem('token-type', response.headers['token-type']);
  localStorage.setItem('uid', response.headers['uid']);

  return response;
}, error => error);

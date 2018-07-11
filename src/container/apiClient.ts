import axios, { AxiosInstance } from 'axios';
import { selectBackendApiUrl } from 'selector/apiSelector';

export const apiClient: AxiosInstance = axios.create({
  baseURL: selectBackendApiUrl(),
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

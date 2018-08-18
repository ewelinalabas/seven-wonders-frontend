import { AuthApi } from 'api/AuthApi';
import { apiClient } from 'container/apiClient';
import { userMapper } from 'container/userMapper';

export const authApi = new AuthApi(apiClient, userMapper);

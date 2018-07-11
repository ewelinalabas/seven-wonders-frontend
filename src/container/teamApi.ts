import { TeamApi } from 'api/TeamApi';
import { apiClient } from 'container/apiClient';

export const teamApi = new TeamApi(apiClient);

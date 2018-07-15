import { TeamApi } from 'api/TeamApi';
import { apiClient } from 'container/apiClient';
import { teamMapper } from 'container/teamMapper';

export const teamApi = new TeamApi(apiClient, teamMapper);

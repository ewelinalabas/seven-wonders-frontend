import { AxiosInstance } from 'axios';
import { TeamMapper } from '../mapper/TeamMapper';

export namespace TeamApi {
  export type Entry = {
    id: number;
    name: string;
    description?: string;
  };
}

export class TeamApi {
  constructor(private client: AxiosInstance, private teamMapper: TeamMapper) {}

  list(): Promise<TeamApi.Entry> {
    return this.client.get('/teams').then(response => response.data.data.map((team) => this.teamMapper.deserialize(team)));
  }
}

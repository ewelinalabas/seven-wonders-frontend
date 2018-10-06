import { AxiosInstance } from 'axios';
import { TeamMapper } from '../mapper/TeamMapper';
import { Team } from 'model/Team';

export namespace TeamApi {
  export type Entry = {
    id: number;
    name: string;
    description?: string;
  };
}

export class TeamApi {
  constructor(private client: AxiosInstance, private teamMapper: TeamMapper) {}

  list(): Promise<Team[]> {
    return this.client
      .get('/teams')
      .then(response => response.data.map(team => this.teamMapper.deserialize(team)));
  }

  create(data: Team): Promise<Team> {
    return this.client
      .post('/teams', { team: this.teamMapper.serialize(data) })
      .then(response => this.teamMapper.deserialize(response.data));
  }
}

import { AxiosInstance } from 'axios';

export namespace TeamApi {
  export type Entry = {};
}

export class TeamApi {
  constructor(private client: AxiosInstance) {}

  list(): Promise<TeamApi.Entry> {
    return this.client.get('/teams').then(response => {
      console.log('response', response);
      return response.data;
    });
  }
}

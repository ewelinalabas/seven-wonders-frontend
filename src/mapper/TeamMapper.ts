import { TeamApi } from 'api/TeamApi';
import { Team } from 'model/Team';

export class TeamMapper {
  deserialize(entry: TeamApi.Entry): Team {
    return {
      id: entry.id,
      name: entry.name,
      description: entry.description
    };
  }
}

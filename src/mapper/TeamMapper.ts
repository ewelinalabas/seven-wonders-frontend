import { TeamApi } from 'api/TeamApi';
import { Team } from 'model/Team';

export class TeamMapper {
  serialize(model: Team): TeamApi.Entry {
    return {
      id: model.id,
      name: model.name,
      description: model.description
    };
  }

  deserialize(entry: TeamApi.Entry): Team {
    return {
      id: entry.id,
      name: entry.name,
      description: entry.description
    };
  }
}

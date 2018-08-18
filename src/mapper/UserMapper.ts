import { AuthApi } from 'api/AuthApi';
import { User } from 'model/User';

export class UserMapper {
  deserialize(entry: AuthApi.Entry): User {
    return {
      id: entry.id,
      email: entry.email,
      name: entry.name
    };
  }
}

import { AxiosInstance } from 'axios';
import { User } from 'model/User';
import { UserMapper } from '../mapper/UserMapper';

export namespace AuthApi {
  export type Entry = {
    id: number;
    email: string;
    name: string;
  };
}

export class AuthApi {
  constructor(private client: AxiosInstance, private userMapper: UserMapper) {}

  signIn(user): Promise<User> {
    return this.client
      .post('/auth/sign_in', { ...user })
      .then(response => this.userMapper.deserialize(response.data));
  }

  signUp(user): Promise<User> {
    return this.client
      .post('/auth', { ...user })
      .then(response => this.userMapper.deserialize(response.data));
  }

  logout(): Promise<any> {
    return this.client.delete('/auth/sign_out').then(() => localStorage.clear());
  }
}

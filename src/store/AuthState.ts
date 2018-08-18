import { User } from 'model/User';

export namespace AuthState {
  export type Domain = User;

  export const INITIAL_DOMAIN = null as User;
}

export type AuthState = {
  auth: AuthState.Domain;
};

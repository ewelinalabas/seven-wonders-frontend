import { Team } from 'model/Team';

export namespace TeamState {
  export type Domain = {
    list: Team[];
  };

  export const INITIAL_DOMAIN_LIST = [];
  export const INITIAL_DOMAIN = {
    list: INITIAL_DOMAIN_LIST
  };
}

export type TeamState = {
  team: TeamState.Domain
};

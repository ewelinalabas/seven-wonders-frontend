import { combineReducers } from 'reducer/combineReducers';
import { handleResolved } from 'reducer/asyncReducer';
import { CREATE_TEAM, FETCH_TEAMS } from 'action/teamAction';
import { TeamState } from 'store/TeamState';
import { reduceReducers } from 'reducer/reduceReducers';

export const fetchTeamList = handleResolved(
  FETCH_TEAMS,
  (state, action) => action.payload,
  TeamState.INITIAL_DOMAIN_LIST
);

export const createTeam = handleResolved(
  CREATE_TEAM,
  (state, action) => [...state, action.payload],
  TeamState.INITIAL_DOMAIN_LIST
);

export const teamReducer = combineReducers<any>({
  team: combineReducers({
    list: reduceReducers(fetchTeamList, createTeam)
  })
});

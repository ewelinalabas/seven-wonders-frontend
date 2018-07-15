import { combineReducers } from 'reducer/combineReducers';
import { handleResolved } from 'reducer/asyncReducer';
import { FETCH_TEAMS } from 'action/teamAction';
import { TeamState } from 'store/TeamState';

export const fetchProjectList = handleResolved(
  FETCH_TEAMS,
  (state, action) => action.payload,
  TeamState.INITIAL_DOMAIN_LIST
);

export const teamReducer = combineReducers<any>({
  team: combineReducers({
    list: fetchProjectList
  })
});

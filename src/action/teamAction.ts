import { AppThunk } from 'store/AppThunk';
import { async } from 'action/asyncAction';

export const FETCH_TEAMS = 'FETCH_TEAMS';
export const fetchTeams = (): AppThunk<Promise<any>> => (dispatch, getState, { teamApi }) =>
  dispatch(async(FETCH_TEAMS, teamApi.list()));

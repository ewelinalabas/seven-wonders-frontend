import { AppThunk } from 'store/AppThunk';
import { async } from 'action/asyncAction';

export const FETCH_TEAMS = 'FETCH_TEAMS';
export const fetchTeams = (): AppThunk<Promise<any>> => (dispatch, getState, { teamApi }) =>
  dispatch(async(FETCH_TEAMS, teamApi.list()));

export const CREATE_TEAM = 'CREATE_TEAM';
export const createTeam = (data): AppThunk<Promise<any>> => (dispatch, getState, { teamApi }) =>
  dispatch(async(CREATE_TEAM, teamApi.create(data)));

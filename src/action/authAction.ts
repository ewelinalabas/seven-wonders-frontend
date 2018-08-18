import { AppThunk } from 'store/AppThunk';
import { async } from 'action/asyncAction';
import { LoginRoute } from 'app/route';

export const SIGN_IN = 'SIGN_IN';
export const signIn = (data): AppThunk<Promise<any>> => (dispatch, getState, { authApi }) =>
  dispatch(async(SIGN_IN, authApi.signIn(data)));

export const SIGN_UP = 'SIGN_UP';
export const signUp = (data): AppThunk<Promise<any>> => (dispatch, getState, { authApi }) =>
  dispatch(async(SIGN_UP, authApi.signUp(data)));

export const LOGOUT = 'LOGOUT';
export const logout = (): AppThunk<Promise<any>> => (dispatch, getState, { authApi }) =>
  dispatch(async(LOGOUT, authApi.logout().then(() => (window.location.href = LoginRoute.SIGN_IN))));

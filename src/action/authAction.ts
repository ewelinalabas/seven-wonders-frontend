import { AppThunk } from 'store/AppThunk';
import { async } from 'action/asyncAction';
import { AppRoute, AuthRoute } from 'app/route';
import { redirectTo } from 'util/redirectTo';

export const SIGN_IN = 'SIGN_IN';
export const signIn = (data): AppThunk<Promise<any>> => (dispatch, getState, { authApi }) =>
  dispatch(async(SIGN_IN, authApi.signIn(data))).then(() =>
    dispatch(redirectTo(AppRoute.HOME))
  );

export const SIGN_UP = 'SIGN_UP';
export const signUp = (data): AppThunk<Promise<any>> => (dispatch, getState, { authApi }) =>
  dispatch(async(SIGN_UP, authApi.signUp(data)))
  .then(() => dispatch(redirectTo(AppRoute.HOME)));

export const LOGOUT = 'LOGOUT';
export const logout = (): AppThunk<Promise<any>> => (dispatch, getState, { authApi }) =>
  dispatch(async(LOGOUT, authApi.logout().then(() => dispatch(redirectTo(AuthRoute.SIGN_IN)))));

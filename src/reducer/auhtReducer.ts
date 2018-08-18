import { combineReducers } from 'reducer/combineReducers';
import { handleResolved } from 'reducer/asyncReducer';
import { SIGN_IN, SIGN_UP } from 'action/authAction';
import { AuthState } from 'store/AuthState';
import { reduceReducers } from 'reducer/reduceReducers';

export const signInReducer = handleResolved(
  SIGN_IN,
  (state, action) => action.payload,
  AuthState.INITIAL_DOMAIN
);

export const signUpReducer = handleResolved(
  SIGN_UP,
  (state, action) => action.payload,
  AuthState.INITIAL_DOMAIN
);

export const authReducer = combineReducers<any>({
  auth: reduceReducers(signInReducer, signUpReducer)
});

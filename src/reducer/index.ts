import { asyncReducer } from 'reducer/asyncReducer';
import { reduceReducers } from 'reducer/reduceReducers';
import { AppState } from 'store';
import { teamReducer } from 'reducer/teamReducer';
import { authReducer } from 'reducer/auhtReducer';

export const appReducer = reduceReducers<AppState>(asyncReducer, authReducer, teamReducer);

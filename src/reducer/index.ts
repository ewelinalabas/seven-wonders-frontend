import { asyncReducer } from 'reducer/asyncReducer';
import { reduceReducers } from 'reducer/reduceReducers';
import { AppState } from 'store';
import { teamReducer } from 'reducer/teamReducer';

export const appReducer = reduceReducers<AppState>(asyncReducer, teamReducer);

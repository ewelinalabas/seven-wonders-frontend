import { asyncReducer } from 'reducer/asyncReducer';
import { reduceReducers } from 'reducer/reduceReducers';
import { AppState } from 'store';

export const appReducer = reduceReducers<AppState>(asyncReducer);

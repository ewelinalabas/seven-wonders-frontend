import { asyncReducer } from 'reducer/asyncReducer';
import { reduceReducers } from 'reducer/reduceReducers';
import { AppState } from 'store';
import { counterReducer } from 'reducer/counterReducer';

export const appReducer = reduceReducers<AppState>(asyncReducer, counterReducer);

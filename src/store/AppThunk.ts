import { AppContainer } from 'container/index.d';
import { ThunkAction } from 'redux-thunk';
import { AppState } from 'store';

export type AppThunk<T> = ThunkAction<T, AppState, AppContainer>;

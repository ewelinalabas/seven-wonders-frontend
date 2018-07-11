import { AsyncState } from 'store/AsyncState';
import { SnackbarState } from 'store/SnackbarState';

export type AppState = Partial<SnackbarState> & Partial<AsyncState>;

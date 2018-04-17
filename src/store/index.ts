import { AsyncState } from 'store/AsyncState';
import { SnackbarState } from 'store/SnackbarState';
import { CounterState } from 'store/CounterState';

export type AppState = Partial<SnackbarState> & Partial<AsyncState> & Partial<CounterState>;

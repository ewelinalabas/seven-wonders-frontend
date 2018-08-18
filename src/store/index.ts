import { AsyncState } from 'store/AsyncState';
import { SnackbarState } from 'store/SnackbarState';
import { TeamState } from 'store/TeamState';
import { AuthState } from 'store/AuthState';

export type AppState = Partial<SnackbarState> &
  Partial<AsyncState> &
  Partial<TeamState> &
  Partial<AuthState>;

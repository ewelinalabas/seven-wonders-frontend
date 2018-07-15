import { AsyncState } from 'store/AsyncState';
import { SnackbarState } from 'store/SnackbarState';
import { TeamState } from 'store/TeamState';

export type AppState = Partial<SnackbarState> &
  Partial<AsyncState> &
  Partial<TeamState>;

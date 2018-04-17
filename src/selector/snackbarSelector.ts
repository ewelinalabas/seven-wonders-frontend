import { createSelector, Selector } from 'reselect';
import { SnackbarState } from 'store/SnackbarState';

type SnackbarStateAware = Partial<SnackbarState> & { [key: string]: any };

export const selectSnackbars: Selector<SnackbarStateAware, SnackbarState.Entry[]> = state =>
  (state && state.snackbars) || [];

export const selectNextSnackbarId = createSelector(
  selectSnackbars,
  snackbars => snackbars.reduce((max, snackbar) => Math.max(max, snackbar.id), 0) + 1
);

export const selectSnackbar = (id: number) =>
  createSelector(selectSnackbars, snackbars => snackbars.find(snackbar => snackbar.id === id));

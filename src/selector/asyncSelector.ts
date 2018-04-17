import * as memoize from 'fast-memoize';
import { createSelector, Selector } from 'reselect';
import { AsyncState, AsyncStatus, AsyncStatusMap } from 'store/AsyncState';

type AsyncAwareState = Partial<AsyncState> & { [key: string]: any };

export function selectAsyncStatusMap(state: AsyncAwareState): AsyncStatusMap {
  return (state && state.async) || {};
}

export const selectAsyncStatus: (name: string) => Selector<AsyncAwareState, AsyncStatus> = memoize(
  (name: string) => createSelector(selectAsyncStatusMap, map => map[name] || AsyncStatus.VOID)
);

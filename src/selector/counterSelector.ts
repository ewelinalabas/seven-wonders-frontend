import { AppState } from 'store';
import { CounterState } from 'store/CounterState';
import { createSelector } from 'reselect';

export function selectDomain(state: AppState): CounterState.Domain {
  return state.counter || CounterState.INITIAL_DOMAIN;
}

export const selectCounter = createSelector(selectDomain, domain => domain && domain);

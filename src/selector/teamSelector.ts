import { AppState } from 'store';
import { TeamState } from 'store/TeamState';
import { createSelector } from 'reselect';

export function selectDomain(state: AppState): TeamState.Domain {
  return state.team || TeamState.INITIAL_DOMAIN;
}

export const selectTeamList = createSelector(selectDomain, domain => domain && domain.list);

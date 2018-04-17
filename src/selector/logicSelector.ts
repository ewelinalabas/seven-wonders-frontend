import { Selector } from 'reselect';

export function selectNotFalsy<S>(selector: Selector<S, any>): Selector<S, boolean> {
  return (state: S) => !!selector(state);
}

export function selectNot<S>(selector: Selector<S, any>): Selector<S, boolean> {
  return (state: S) => !selector(state);
}

export function selectAnd<S>(...selectors: Selector<S, any>[]): Selector<S, boolean> {
  return (state: S) => selectors.every(selector => !!selector(state));
}

export function selectOr<S>(...selectors: Selector<S, any>[]): Selector<S, boolean> {
  return (state: S) => selectors.some(selector => !!selector(state));
}

import { Action, Reducer } from 'redux';

type ReducersMap<S> = { [K in keyof S]?: Reducer<S[K]> };

/**
 * Combines reducers to reduce object
 */
export function combineReducers<S>(map: ReducersMap<S>, initialState: S = {} as S): Reducer<S> {
  const keys: Partial<keyof S>[] = Object.keys(map) as (keyof S)[];

  return (state: S = initialState, action: Action) => {
    if (state === null || state === undefined) {
      return state;
    }

    let hasChanged: boolean = false;
    const next: S = Object.assign({}, state);

    keys.forEach(key => {
      const prevState: S[keyof S] = state[key as keyof S];
      const reducer = map[key as keyof S];
      const nextState: S[keyof S] = reducer ? reducer(prevState, action) : prevState;

      if (prevState !== nextState) {
        next[key] = nextState;
        hasChanged = true;
      }
    });

    return hasChanged ? next : state;
  };
}

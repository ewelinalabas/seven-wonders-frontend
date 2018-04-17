import { isActionPending, isActionRejected, isActionResolved } from 'action/asyncAction';
import { Action, Reducer } from 'redux';
import { AsyncAwareState, AsyncStatus, AsyncStatusMap } from 'store/AsyncState';

export function asyncStatusMapReducer(state: AsyncStatusMap = {}, action: Action): AsyncStatusMap {
  if (isActionPending(action)) {
    return { ...state, [action.type]: AsyncStatus.PENDING };
  } else if (isActionResolved(action)) {
    return { ...state, [action.type]: AsyncStatus.RESOLVED };
  } else if (isActionRejected(action)) {
    return { ...state, [action.type]: AsyncStatus.REJECTED };
  }

  return state;
}

export function asyncReducer(
  state: Partial<AsyncAwareState> = {},
  action: Action
): AsyncAwareState {
  return {
    ...state,
    async: asyncStatusMapReducer(state.async, action)
  };
}

export function handlePending<S>(type: string, reducer: Reducer<S>, initialState: S): Reducer<S> {
  return (state: S = initialState, action: any) =>
    action.type === type && isActionPending(action) ? reducer(state, action) : state;
}

export function handleResolved<S>(type: string, reducer: Reducer<S>, initialState: S): Reducer<S> {
  return (state: S = initialState, action: any) =>
    action.type === type && isActionResolved(action) ? reducer(state, action) : state;
}

export function handleRejected<S>(type: string, reducer: Reducer<S>, initialState: S): Reducer<S> {
  return (state: S = initialState, action: any) =>
    action.type === type && isActionRejected(action) ? reducer(state, action) : state;
}

type AsyncReducersMap<S> = {
  pending?: Reducer<S>;
  resolved?: Reducer<S>;
  rejected?: Reducer<S>;
};

export function handleAsync<S>(
  type: string,
  reducers: AsyncReducersMap<S>,
  initialState: S
): Reducer<S> {
  return (state: S = initialState, action: any) => {
    if (action.type !== type) {
      return state;
    }

    if (reducers.pending && isActionPending(action)) {
      return reducers.pending(state, action);
    } else if (reducers.resolved && isActionResolved(action)) {
      return reducers.resolved(state, action);
    } else if (reducers.rejected && isActionRejected(action)) {
      return reducers.rejected(state, action);
    }

    return state;
  };
}

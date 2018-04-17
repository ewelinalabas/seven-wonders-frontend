import { Action, ActionMeta } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';

export interface AsyncAction<T> extends Action<T> {
  pending?: boolean;
  resolved?: boolean;
  rejected?: boolean;
}

export interface AsyncActionMeta<T, M> extends AsyncAction<T>, ActionMeta<T, M> {}

export interface AsyncActionCreator<T> {
  pending: (payload?: T) => AsyncAction<T>;
  resolved: (payload?: T) => AsyncAction<T>;
  rejected: (payload?: any) => AsyncAction<T>;
}

export interface AsyncActionCreatorMeta<T, M> extends AsyncActionCreator<T> {
  pending: (payload?: T, meta?: M) => AsyncActionMeta<T, M>;
  resolved: (payload?: T, meta?: M) => AsyncActionMeta<T, M>;
  rejected: (payload?: any, meta?: M) => AsyncActionMeta<T, M>;
}

export function createAsyncActions(type: string): AsyncActionCreatorMeta<any, any> {
  return {
    pending: (payload?, meta = {}) => ({ type, payload, meta, pending: true }),
    resolved: (payload?, meta = {}) => ({ type, payload, meta, resolved: true }),
    rejected: (payload?, meta = {}) => ({ type, payload, meta, error: true, rejected: true })
  };
}

export function isActionPending(action: any): boolean {
  return action && !!action.pending;
}

export function isActionRejected(action: any): boolean {
  return action && !!action.rejected;
}

export function isActionResolved(action: any): boolean {
  return action && !!action.resolved;
}

export function isActionFulfilled(action: any): boolean {
  return isActionResolved(action) && action.payload !== undefined && action.payload !== null;
}

export function async<T>(
  type: string,
  promise: Promise<T>,
  optimistic?: T,
  meta?: any
): ThunkAction<Promise<T>, any, any> {
  const actions = createAsyncActions(type);

  return dispatch => {
    dispatch(actions.pending(optimistic, meta));

    return promise
      .then(resolved => {
        dispatch(actions.resolved(resolved, meta));
        return resolved;
      })
      .catch(error => {
        dispatch(actions.rejected(error, meta));
        throw error;
      });
  };
}

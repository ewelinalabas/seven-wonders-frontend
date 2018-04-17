import { Action } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export type IncrementAction = Action<any>;
export const increment = (): IncrementAction => ({
  type: INCREMENT
});

export const DECREMENT = 'DECREMENT';
export type DecrementAction = Action<any>;
export const decrement = (): DecrementAction => ({
  type: DECREMENT
});

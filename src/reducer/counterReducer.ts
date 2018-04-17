import { combineReducers } from 'reducer/combineReducers';
import { handleAction } from 'redux-actions';
import { DECREMENT, INCREMENT } from 'action/counterAction';
import { CounterState } from 'store/CounterState';
import { reduceReducers } from 'reducer/reduceReducers';

export const incrementCounter = handleAction(
  INCREMENT,
  (state, action) => ++state,
  CounterState.INITIAL_DOMAIN
);

export const decrementCounter = handleAction(
  DECREMENT,
  (state, action) => --state,
  CounterState.INITIAL_DOMAIN
);

export const counterReducer = combineReducers<any>({
  counter: reduceReducers(incrementCounter, decrementCounter)
});

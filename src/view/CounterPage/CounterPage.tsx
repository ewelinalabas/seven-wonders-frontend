import * as React from 'react';
import { ComponentClass, SFC } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from 'action/counterAction';
import { selectCounter } from 'selector/counterSelector';

export namespace CounterPage {
  export type StateProps = {
    counter: number;
  };
  export type DispatchProps = {
    increment: () => any;
    decrement: () => any;
  };
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

export const CounterPagePure: SFC<CounterPage.Props> = props => (
  <div>
    <span>{props.counter}</span>
    <button onClick={() => props.increment()}>Increment</button>
    <button onClick={() => props.decrement()}>Decrement</button>
  </div>
);

export const CounterPage: ComponentClass<CounterPage.OwnProps> = connect(
  state => ({
    counter: selectCounter(state)
  }),
  dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  })
)(CounterPagePure) as ComponentClass<CounterPage.OwnProps>;

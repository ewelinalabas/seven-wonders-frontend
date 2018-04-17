export namespace CounterState {
  export type Domain = number;

  export const INITIAL_DOMAIN: Domain = 0;
}

export type CounterState = {
  counter: CounterState.Domain;
};

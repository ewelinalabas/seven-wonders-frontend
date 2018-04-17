import * as React from 'react';
import { SFC } from 'react';

export namespace HomePage {
  export type Props = {};
}

export const HomePage: SFC<HomePage.Props> = props => (
  <div>
    <h2>Home Page</h2>
  </div>
);

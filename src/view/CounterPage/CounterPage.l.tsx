import * as React from 'react';
import { Loadable } from 'component/Loadable/Loadable';
import { CounterPage as CounterPageType } from './CounterPage';

export const CounterPageLoadable = Loadable<CounterPageType.Props>({
  loader: () => import('./CounterPage' /* webpackChunkName: "CounterPage" */),
  render: ({ CounterPage }, props) => <CounterPage {...props} />,
  lazy: false
});

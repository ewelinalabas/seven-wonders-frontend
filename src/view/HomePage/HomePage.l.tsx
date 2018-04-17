import * as React from 'react';
import { Loadable } from 'component/Loadable/Loadable';
import { HomePage as HomePageType } from './HomePage';

export const HomePageLoadable = Loadable<HomePageType.Props>({
  loader: () => import('./HomePage' /* webpackChunkName: "HomePage" */),
  render: ({ HomePage }, props) => <HomePage {...props} />,
  lazy: false
});

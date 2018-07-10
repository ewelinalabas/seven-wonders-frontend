import * as React from 'react';
import { Loadable } from 'component/Loadable/Loadable';
import { TeamListPage as TeamListPageType } from './TeamListPage';

export const TeamListPageLoadable = Loadable<TeamListPageType.Props>({
  loader: () => import('./TeamListPage' /* webpackChunkName: "TeamListPage" */),
  render: ({ TeamListPage }, props) => <TeamListPage {...props} />,
  lazy: false
});

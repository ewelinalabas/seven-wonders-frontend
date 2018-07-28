import * as React from 'react';
import { Loadable } from 'component/Loadable/Loadable';
import { CreateTeamPage as CreateTeamPageType } from './CreateTeamPage';

export const CreateTeamPageLoadable = Loadable<CreateTeamPageType.Props>({
  loader: () => import('./CreateTeamPage' /* webpackChunkName: "CreateTeamPage" */),
  render: ({ CreateTeamPage }, props) => <CreateTeamPage {...props} />,
  lazy: false
});

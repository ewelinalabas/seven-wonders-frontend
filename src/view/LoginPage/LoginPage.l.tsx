import * as React from 'react';
import { Loadable } from 'component/Loadable/Loadable';
import { LoginPage as LoginPageType } from './LoginPage';

export const LoginPageLoadable = Loadable<LoginPageType.Props>({
  loader: () => import('./LoginPage' /* webpackChunkName: "LoginPage" */),
  render: ({ LoginPage }, props) => <LoginPage {...props} />,
  lazy: false
});

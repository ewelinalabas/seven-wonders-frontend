import * as React from 'react';
import { Loadable } from 'component/Loadable/Loadable';
import { SignupPage as SignupPageType } from './SignupPage';

export const SignupPageLoadable = Loadable<SignupPageType.Props>({
  loader: () => import('./SignupPage' /* webpackChunkName: "SignupPage" */),
  render: ({ SignupPage }, props) => <SignupPage {...props} />,
  lazy: false
});

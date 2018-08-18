import * as React from 'react';
import { SFC } from 'react';
import { Route, Switch } from 'react-router';
import { AppRoute, LoginRoute } from 'app/route';
import { LoginPageLoadable } from 'view/LoginPage/LoginPage.l';
import { ClientView } from 'view/ClientView/ClientView';
import { SignupPageLoadable } from 'view/SigupPage/SignupPage.l';

export const AppView: SFC = () => (
  <Switch>
    <Route path={LoginRoute.SIGN_IN} component={LoginPageLoadable} />
    <Route path={LoginRoute.SIGN_UP} component={SignupPageLoadable} />\
    <Route path={AppRoute.PATTERN} component={ClientView} />
  </Switch>
);

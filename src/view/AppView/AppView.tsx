import * as React from 'react';
import { SFC } from 'react';
import {
  AppWrapper,
  ContentWrapper,
  LeftNavigatonMenuWrapper,
  MainWrapper
} from 'view/AppView/AppView.s';
import { Route, Switch } from 'react-router';
import { AppRoute } from 'app/route';
import { NotFoundPage } from 'view/NotFoundPage/NotFoundPage';
import { TeamListPageLoadable } from 'view/TeamListPage/TeamListPage.l';
import { TopBar } from 'view/AppView/TopNav/TopBar';
import { NavigationMenu } from 'view/AppView/NavigationMenu/NavigationMenu';
import { CreateTeamPageLoadable } from 'view/CreateTeamPage/CreateTeamPage.l';

export const AppView: SFC = () => (
  <AppWrapper>
    <TopBar />
    <MainWrapper>
      <LeftNavigatonMenuWrapper>
        <NavigationMenu />
      </LeftNavigatonMenuWrapper>
      <ContentWrapper>
        <Switch>
          <Route path={AppRoute.HOME} component={TeamListPageLoadable} exact />
          <Route path={AppRoute.CREATE_TEAM} component={CreateTeamPageLoadable} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
    </MainWrapper>
  </AppWrapper>
);

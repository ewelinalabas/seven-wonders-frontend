import * as React from 'react';
import { SFC } from 'react';
import { AppWrapper, ContentWrapper, LeftNavigatonMenuWrapper, MainWrapper } from 'view/AppView/AppView.s';
import { Route, Switch } from 'react-router';
import { AppRoute } from 'app/route';
import { NotFoundPage } from 'view/NotFoundPage/NotFoundPage';
import { HomePageLoadable } from 'view/HomePage/HomePage.l';
import { CounterPageLoadable } from 'view/CounterPage/CounterPage.l';
import { TopBar } from 'view/AppView/TopNav/TopBar';
import { NavigationMenu } from 'view/AppView/NavigationMenu/NavigationMenu';

export const AppView: SFC = () => (
  <AppWrapper>
    <TopBar />
    <MainWrapper>
      <LeftNavigatonMenuWrapper>
        <NavigationMenu />
      </LeftNavigatonMenuWrapper>
      <ContentWrapper>
        <Switch>
          <Route path={AppRoute.HOME} component={HomePageLoadable} exact />
          <Route path={AppRoute.COUNTER} component={CounterPageLoadable} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
    </MainWrapper>
  </AppWrapper>
);

import * as React from 'react';
import { SFC } from 'react';
import { AppWrapper, ContentWrapper, MainWrapper } from 'view/AppView/AppView.s';
import { Route, Switch } from 'react-router';
import { AppRoute } from 'app/route';
import { NotFoundPage } from 'view/NotFoundPage/NotFoundPage';
import { HomePageLoadable } from 'view/HomePage/HomePage.l';
import { CounterPageLoadable } from 'view/CounterPage/CounterPage.l';

export const AppView: SFC = () => (
  <AppWrapper>
    <MainWrapper>
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

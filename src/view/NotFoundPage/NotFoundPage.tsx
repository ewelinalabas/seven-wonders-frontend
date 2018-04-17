import * as React from 'react';
import { SFC } from 'react';
import { NotFoundPageWrapper } from 'view/NotFoundPage/NotFoundPage.s';

export const NotFoundPage: SFC = () => (
  <NotFoundPageWrapper>
    <h2>404 Not found</h2>
    <p>Cannot find the page you are looking for.</p>
  </NotFoundPageWrapper>
);

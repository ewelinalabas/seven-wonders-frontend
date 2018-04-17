import * as React from 'react';
import { SFC } from 'react';
import { Route, RouteProps } from 'react-router';
import { relativePath } from 'router/relativePath';

export function createRelativeRoute(baseRoute: string): SFC<RouteProps> {
  return ({ path, ...props }: RouteProps) =>
    path ? <Route path={relativePath(baseRoute, path)} {...props} /> : <Route {...props} />;
}

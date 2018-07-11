import { Location } from 'history';
import * as memoize from 'fast-memoize';
import { match, matchPath } from 'react-router';
import { RouterState } from 'react-router-redux';
import { createSelector, Selector } from 'reselect';

type RouterStateAware = Partial<RouterState> & { [key: string]: any };

export function selectLocation(state: RouterStateAware): Location | undefined {
  return (state && state.location) || undefined;
}

export const selectLocationPath = createSelector(
  selectLocation,
  location => (location && location.pathname) || undefined
);

export const selectPathContainPattern = memoize((pattern: string) =>
  createSelector(
    selectLocation,
    location =>
      location && (location.pathname.includes(pattern) || Boolean(location.pathname.match('^/$')))
  )
);

export const selectPathGrantRegExp = memoize((regexp: string) =>
  createSelector(selectLocation, location => location && Boolean(location.pathname.match(regexp)))
);

export const selectQueryString = createSelector(selectLocation, location => {
  let queryString = (location && location.search) || '';
  if (queryString.startsWith('?')) {
    queryString = queryString.substring(1);
  }

  return queryString;
});

export const selectMatch: <P = any>(
  ...routes: string[]
) => Selector<any, match<P> | null> = memoize(
  (...routes: string[]) =>
    createSelector(selectLocationPath, currentPath => {
      if (!currentPath) {
        return null;
      }

      return routes.reduce(
        (aMatch, route) => aMatch || matchPath<any>(currentPath, { path: route, exact: false }),
        null as match<any> | null
      );
    }),
  (...routes: string[]) => routes.join(' ')
);

export const selectExactMatch = <P = any>(...routes: string[]): Selector<any, match<P> | null> =>
  createSelector(selectLocationPath, currentPath => {
    if (!currentPath) {
      return null;
    }

    return routes.reduce(
      (aMatch, route) => aMatch || matchPath<any>(currentPath, { path: route, exact: true }),
      null as match<any> | null
    );
  });

export const selectHasMatch: (...routes: string[]) => Selector<any, boolean> = memoize(
  (...routes: string[]) => createSelector(selectMatch(...routes), aMatch => !!aMatch),
  (...routes: string[]) => routes.join(' ')
);

export const selectHasExactMatch: (...routes: string[]) => Selector<any, boolean> = memoize(
  (...routes: string[]) => createSelector(selectExactMatch(...routes), aMatch => !!aMatch),
  (...routes: string[]) => routes.join(' ')
);

export const selectHasPathMatch: (...paths: string[]) => Selector<any, boolean> = memoize(
  (...paths: string[]) =>
    createSelector(
      selectLocationPath,
      currentPath => (currentPath ? paths.some(path => currentPath.indexOf(path) === 0) : false)
    ),
  (...paths: string[]) => paths.join(' ')
);

export const selectHasPathExactMatch: (...paths: string[]) => Selector<any, boolean> = memoize(
  (...paths: string[]) =>
    createSelector(selectLocationPath, currentPath => paths.some(path => path === currentPath)),
  (...paths: string[]) => paths.join(' ')
);

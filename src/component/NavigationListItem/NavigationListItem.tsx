import * as React from 'react';
import { ComponentClass, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selectHasPathExactMatch, selectHasPathMatch } from 'selector/routeSelector';
import { ListItemProps } from 'material-ui';
import ListItem from 'material-ui/List/ListItem';

export namespace NavigationListItem {
  export type DispatchProps = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  };
  export type OwnProps = ListItemProps & {
    href: string;
    activeColor: string;
    activeFontWeight?: any;
    matchExact?: boolean;
  };
  export type Props = DispatchProps & OwnProps;
}

export const NavigationListItem: ComponentClass<NavigationListItem.OwnProps> = connect(
  (state, ownProps: NavigationListItem.OwnProps) => {
    let style = ownProps.style || {};
    if (ownProps.href) {
      const isActive = ownProps.matchExact
        ? selectHasPathExactMatch(ownProps.href)(state)
        : selectHasPathMatch(ownProps.href)(state);
      style = {
        ...style,
        color: isActive ? ownProps.activeColor : ownProps.color,
        fontWeight: isActive ? ownProps.activeFontWeight : 400
      };
    }

    return { style };
  },
  (dispatch, ownProps: NavigationListItem.OwnProps): NavigationListItem.DispatchProps => ({
    onClick: event => {
      event.preventDefault();
      if (ownProps.href) {
        dispatch(push(ownProps.href));
      }
      if (ownProps.onClick) {
        ownProps.onClick(event);
      }
    }
  }),
  (stateProps, dispatchProps, { matchExact, ...ownProps }) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    style: { ...(ownProps.style || {}), ...stateProps.style }
  })
)(ListItem as any) as ComponentClass<NavigationListItem.OwnProps>;

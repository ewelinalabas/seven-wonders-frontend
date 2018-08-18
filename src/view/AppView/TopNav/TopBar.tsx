import * as React from 'react';
import { ComponentClass, SFC } from 'react';
import UserIcon from 'material-ui/svg-icons/action/face';
import { AppBar, AppTitle } from 'view/AppView/TopNav/TopBar.s';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { logout } from 'action/authAction';

export namespace TopBar {
  export type StateProps = {};
  export type DispatchProps = {
    logout: () => Promise<any>;
  };
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

export const TopBarPure: SFC<TopBar.Props> = props => (
  <AppBar>
    <AppTitle>Seven Wonders</AppTitle>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <UserIcon color={white} />
        </IconButton>
      }
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      <MenuItem primaryText="Change Password" />
      <MenuItem primaryText="Logout" onClick={() => props.logout()} />
    </IconMenu>
  </AppBar>
);

export const TopBar: ComponentClass<TopBar.OwnProps> = connect(
  state => ({}),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(TopBarPure);

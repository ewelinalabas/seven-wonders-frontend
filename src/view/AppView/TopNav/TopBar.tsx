import * as React from 'react';
import { SFC } from 'react';
import UserIcon from 'material-ui/svg-icons/action/face';
import { AppBar, AppTitle } from 'view/AppView/TopNav/TopBar.s';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { white } from 'material-ui/styles/colors';

export const TopBar: SFC<{}> = () => (
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
      <MenuItem primaryText="Logout" />
    </IconMenu>
  </AppBar>
);

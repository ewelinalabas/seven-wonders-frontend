import * as React from 'react';
import { SFC } from 'react';
import { NavigationMenuPaper } from 'view/AppView/NavigationMenu/NavigationMenu.s';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

export namespace NavigationMenu {
  export type Props = {};
}

export const NavigationMenu: SFC<NavigationMenu.Props> = props => {
  return (
    <NavigationMenuPaper>
      <List>
        <ListItem primaryText="Some value" />
      </List>
    </NavigationMenuPaper>
  );
};

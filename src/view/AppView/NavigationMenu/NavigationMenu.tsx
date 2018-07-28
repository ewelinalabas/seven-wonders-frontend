import * as React from 'react';
import { SFC } from 'react';
import { NavigationMenuPaper } from 'view/AppView/NavigationMenu/NavigationMenu.s';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { NavigationListItem } from 'component/NavigationListItem/NavigationListItem';
import { AppRoute } from 'app/route';
import { grey600 } from 'material-ui/styles/colors';

export namespace NavigationMenu {
  export type Props = {};
}

export const NavigationMenu: SFC<NavigationMenu.Props> = props => {
  return (
    <NavigationMenuPaper>
      <List>
        <NavigationListItem
          primaryText="Home"
          href={AppRoute.HOME}
          activeBackgroundColor="#c200c2"
          activeColor={grey600}
        />
        <NavigationListItem
          primaryText="Create new team"
          href={AppRoute.CREATE_TEAM}
          activeBackgroundColor="#c200c2"
          activeColor={grey600}
        />
      </List>
    </NavigationMenuPaper>
  );
};

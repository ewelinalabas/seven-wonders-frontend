import * as React from 'react';
import { SFC } from 'react';
import { TeamListWrapper } from 'view/TeamListPage/TeamListPage.s';
import { SingleTeam } from 'view/TeamListPage/SingleTeam/SingleTeam';

export namespace HomePage {
  export type Props = {};
}

export const TeamListPage: SFC<HomePage.Props> = props => (
  <TeamListWrapper>
    <h2>All Teams</h2>
    <SingleTeam />
  </TeamListWrapper>
);

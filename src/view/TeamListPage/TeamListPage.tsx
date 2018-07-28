import * as React from 'react';
import { ComponentClass, SFC } from 'react';
import { TeamListWrapper } from 'view/TeamListPage/TeamListPage.s';
import { SingleTeam } from 'view/TeamListPage/SingleTeam/SingleTeam';
import { connect } from 'react-redux';
import { selectTeamList } from 'selector/teamSelector';
import { Team } from 'model/Team';
import { DefaultLoader } from 'component/DefaultLoader/DefaultLoader';
import { FETCH_TEAMS } from 'action/teamAction';

export namespace TeamListPage {
  export type StateProps = {
    list: Team[];
  };
  export type OwnProps = {};
  export type Props = StateProps & OwnProps;
}

export const TeamListPagePure: SFC<TeamListPage.Props> = props => (
  <TeamListWrapper>
    <h2>All Teams</h2>
    <DefaultLoader
      name={FETCH_TEAMS}
      resolved={() =>
        <>
          {props.list.map((team, index) => <SingleTeam key={index} team={team} />)}
        </>
      }
    />
  </TeamListWrapper>
);

export const TeamListPage: ComponentClass<TeamListPage.OwnProps> = connect(
  (state): TeamListPage.StateProps => ({
    list: selectTeamList(state)
  })
)(TeamListPagePure) as ComponentClass<TeamListPage.OwnProps>;

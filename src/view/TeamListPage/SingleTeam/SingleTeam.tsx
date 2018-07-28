import * as React from 'react';
import { SFC } from 'react';
import { CardActionWrapper, SingleTeamWrapper } from 'view/TeamListPage/SingleTeam/SingleTeam.s';
import CardTitle from 'material-ui/Card/CardTitle';
import CardActions from 'material-ui/Card/CardActions';
import RaisedButton from 'material-ui/RaisedButton';
import CardText from 'material-ui/Card/CardText';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import UserAvatar from '../../../../app/assets/user.png';
import { Team } from 'model/Team';

export namespace SingleTeam {
  export type Props = {
    team: Team;
  };
}

export const SingleTeam: SFC<SingleTeam.Props> = props => {
  return (
    <SingleTeamWrapper>
      <CardTitle title={props.team.name} subtitle={props.team.description} />
      <CardText>
        <List>
          <ListItem leftAvatar={<Avatar src={UserAvatar} />} primaryText="Brendan Lim" />
          <Divider inset={true} />
          <ListItem leftAvatar={<Avatar src={UserAvatar} />} primaryText="me, Scott, Jennifer" />
          <Divider inset={true} />
          <ListItem leftAvatar={<Avatar src={UserAvatar} />} primaryText="Grace Ng" />
          <Divider inset={true} />
          <ListItem leftAvatar={<Avatar src={UserAvatar} />} primaryText="Kerem Suer" />
          <Divider inset={true} />
          <ListItem leftAvatar={<Avatar src={UserAvatar} />} primaryText="Raquel Parrado" />
        </List>
      </CardText>
      <CardActionWrapper>
        <RaisedButton label="Go" primary />
        <RaisedButton label="Edit" secondary />
      </CardActionWrapper>
    </SingleTeamWrapper>
  );
};

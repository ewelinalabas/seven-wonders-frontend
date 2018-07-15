import * as React from 'react';
import { SFC } from 'react';
import { SingleTeamWrapper } from 'view/TeamListPage/SingleTeam/SingleTeam.s';
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
          <ListItem
            leftAvatar={<Avatar src={UserAvatar} />}
            primaryText="Brendan Lim"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Brunch this weekend?</span>
                <br />
                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab
                brunch?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src={UserAvatar} />}
            primaryText="me, Scott, Jennifer"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Summer BBQ</span>
                <br />
                Wish I could come, but I&apos;m out of town this weekend.
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src={UserAvatar} />}
            primaryText="Grace Ng"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Oui oui</span>
                <br />
                Do you have any Paris recs? Have you ever been?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src={UserAvatar} />}
            primaryText="Kerem Suer"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Birthday gift</span>
                <br />
                Do you have any ideas what we can get Heidi for her birthday? How about a pony?
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src={UserAvatar} />}
            primaryText="Raquel Parrado"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Recipe to try</span>
                <br />
                We should eat this: grated squash. Corn and tomatillo tacos.
              </p>
            }
            secondaryTextLines={2}
          />
        </List>
      </CardText>
      <CardActions>
        <RaisedButton label="Go" primary />
        <RaisedButton label="Edit" secondary />
      </CardActions>
    </SingleTeamWrapper>
  );
};

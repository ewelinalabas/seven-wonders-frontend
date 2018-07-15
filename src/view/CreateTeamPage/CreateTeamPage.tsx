import * as React from 'react';
import { SFC } from 'react';
import Card from 'material-ui/Card/Card';
import CardTitle from 'material-ui/Card/CardTitle';

export namespace CreateTeamPage {
  export type StateProps = {};
  export type DispatchProps = {};
  export type OwnProps = {};
  export type Props = StateProps & DispatchProps & OwnProps;
}

export const CreateTeamPage: SFC<CreateTeamPage.Props> = props => {
  return (
    <Card>
      <CardTitle title="Create new team" />
    </Card>
  );
};

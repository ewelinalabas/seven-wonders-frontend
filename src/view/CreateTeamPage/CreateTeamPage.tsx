import * as React from 'react';
import { SFC } from 'react';
import CardTitle from 'material-ui/Card/CardTitle';
import { CardActionsWrapper, CreateTeamPageWrapper } from 'view/CreateTeamPage/CreateTeamPage.s';
import CardText from 'material-ui/Card/CardText';
import { TextField } from 'component/Form/TextField/TextField';
import { ComponentClass, connect } from 'react-redux';
import { compose } from 'redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { FormNames } from 'register/FormNames';
import CardActions from 'material-ui/Card/CardActions';
import { createTeam } from 'action/teamAction';
import RaisedButton from 'material-ui/RaisedButton';

export namespace CreateTeamPage {
  export type StateProps = {};
  export type DispatchProps = {};
  export type OwnProps = {};
  export type FormData = {
    name: string;
    description: string;
  };
  export type Props = StateProps & DispatchProps & OwnProps & InjectedFormProps<FormData>;
}

export const CreateTeamPagePure: SFC<CreateTeamPage.Props> = props => (
  <CreateTeamPageWrapper>
    <form onSubmit={props.handleSubmit}>
      <CardTitle title="Create new team" />
      <CardText>
        <TextField name="name" floatingLabelText="Team name" fullWidth />
        <TextField
          name="description"
          floatingLabelText="Team description"
          rows={2}
          rowsMax={4}
          fullWidth
        />
      </CardText>
      <CardActionsWrapper>
        <RaisedButton label="Create" type="submit" primary />
      </CardActionsWrapper>
    </form>
  </CreateTeamPageWrapper>
);

export const CreateTeamPage: ComponentClass<CreateTeamPage.OwnProps> = compose(
  connect(state => ({})),
  reduxForm({
    form: FormNames.CreateTeam,
    onSubmit: (data: CreateTeamPage.FormData, dispatch) => {
      dispatch(createTeam(data));
    }
  })
\)(CreateTeamPagePure);

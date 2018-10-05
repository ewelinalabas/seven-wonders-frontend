import * as React from 'react';
import { ComponentClass, SFC } from 'react';
import {
  CardActionsWrapper,
  CardTextWrapper,
  CardWrapper,
  LoginViewWrapper
} from 'view/LoginPage/LoginPage.s';
import CardTitle from 'material-ui/Card/CardTitle';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { FormNames } from 'register/FormNames';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'component/Form/TextField/TextField';
import { push } from 'react-router-redux';
import { compilePath } from 'router/compilePath';
import { AuthRoute } from 'app/route';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from 'action/authAction';
import { required } from 'validator/required';
import { email } from 'validator/email';

export namespace LoginPage {
  export type StateProps = {};
  export type DispatchProps = {
    redirectToSignUp: () => void;
  };
  export type OwnProps = {};
  export type FormData = {
    email: string;
    password: string;
  };
  export type Props = StateProps & DispatchProps & OwnProps & InjectedFormProps<FormData>;
}

export const LoginPagePure: SFC<LoginPage.Props> = props => (
  <LoginViewWrapper onSubmit={props.handleSubmit}>
    <CardWrapper>
      <CardTitle title="Seven Wonders" />
      <CardTextWrapper>
        <TextField
          name="email"
          validate={[required('Email is required'), email('Email is not correct')]}
          floatingLabelText="Email"
          fullWidth
        />
        <TextField
          name="password"
          validate={required('Password is required')}
          floatingLabelText="Password"
          type="password"
          fullWidth
        />
      </CardTextWrapper>
      <CardActionsWrapper>
        <RaisedButton label="Login" type="submit" primary fullWidth />
        <RaisedButton
          label="Sign up"
          onClick={() => props.redirectToSignUp()}
          secondary
          fullWidth
        />
      </CardActionsWrapper>
    </CardWrapper>
  </LoginViewWrapper>
);

export const LoginPage: ComponentClass<LoginPage.OwnProps> = compose(
  connect(
    state => ({}),
    dispatch => ({
      redirectToSignUp: () => dispatch(push(compilePath(AuthRoute.SIGN_UP)))
    })
  ),
  reduxForm({
    form: FormNames.Login,
    onSubmit: (data: LoginPage.FormData, dispatch: any) =>
      dispatch(signIn({ email: data.email, password: data.password }))
  })
)(LoginPagePure);

import * as React from 'react';
import { ComponentClass, SFC } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { FormNames } from 'register/FormNames';
import { SignupPageWrapper, CardWrapper } from 'view/SigupPage/SignupPage.s';
import CardTitle from 'material-ui/Card/CardTitle';
import { CardTextWrapper } from 'view/LoginPage/LoginPage.s';
import { TextField } from 'component/Form/TextField/TextField';
import CardActions from 'material-ui/Card/CardActions';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import { compilePath } from 'router/compilePath';
import { AppRoute } from 'app/route';
import { email } from 'validator/email';
import { required } from 'validator/required';
import { equalTo } from 'validator/equalTo';
import { signUp } from 'action/authAction';

export namespace SignupPage {
  export type StateProps = {};
  export type DispatchProps = {};
  export type OwnProps = {};
  export type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  export type Props = StateProps & DispatchProps & OwnProps & InjectedFormProps<FormData>;
}

export const SignupPagePure: SFC<SignupPage.Props> = props => (
  <SignupPageWrapper onSubmit={props.handleSubmit}>
    <CardWrapper>
      <CardTitle title="Seven Wonders" />
      <CardTextWrapper>
        <TextField
          name="email"
          floatingLabelText="Email"
          validate={email('Email is not valid')}
          fullWidth
        />
        <TextField
          name="name"
          floatingLabelText="Name"
          validate={required('Name is required')}
          fullWidth
        />
        <TextField
          name="password"
          floatingLabelText="Password"
          type="password"
          validate={required('Password is required')}
          fullWidth
        />
        <TextField
          name="confirmPassword"
          floatingLabelText="Confirmation password"
          validate={equalTo('password', 'This file is not equal to password')}
          type="password"
          fullWidth
        />
      </CardTextWrapper>
      <CardActions>
        <RaisedButton label="Sign Up" type="submit" primary fullWidth />
      </CardActions>
    </CardWrapper>
  </SignupPageWrapper>
);

export const SignupPage: ComponentClass<SignupPage.OwnProps> = reduxForm({
  form: FormNames.SignUp,
  onSubmit: (data: SignupPage.FormData, dispatch: any) => {
    const user = {
      email: data.email,
      password: data.password
    };

    dispatch(signUp(user)).then(() => dispatch(push(compilePath(AppRoute.HOME))));
  }
})(SignupPagePure);

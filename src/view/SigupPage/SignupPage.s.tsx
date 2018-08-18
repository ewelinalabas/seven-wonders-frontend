import glamorous from 'glamorous';
import Card from 'material-ui/Card/Card';

export const SignupPageWrapper = glamorous.form({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const CardWrapper = glamorous(Card)({
  width: '360px'
});

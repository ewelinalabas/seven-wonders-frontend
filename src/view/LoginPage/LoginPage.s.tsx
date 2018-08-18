import glamorous from 'glamorous';
import CardText from 'material-ui/Card/CardText';
import CardActions from 'material-ui/Card/CardActions';
import Card from 'material-ui/Card/Card';

export const LoginViewWrapper = glamorous.form({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const CardWrapper = glamorous(Card)({
  width: '360px'
});

export const CardTextWrapper = glamorous(CardText)({
  display: 'flex',
  flexDirection: 'column'
});

export const CardActionsWrapper = glamorous(CardActions)({
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

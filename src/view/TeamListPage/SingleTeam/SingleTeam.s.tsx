import glamorous from 'glamorous';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';

export const SingleTeamWrapper = glamorous(Card)({
  width: '100%',
  margin: '10px 0'
});

export const CardActionWrapper = glamorous(CardActions)({
  display: 'flex',
  justifyContent: 'flex-end'
});

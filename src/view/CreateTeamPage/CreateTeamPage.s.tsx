import glamorous from 'glamorous';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';

export const CreateTeamPageWrapper = glamorous(Card)({
  margin: 50
});

export const CardActionsWrapper = glamorous(CardActions)({
  display: 'flex',
  justifyContent: 'flex-end'
});

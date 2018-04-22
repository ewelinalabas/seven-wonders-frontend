import glamorous from 'glamorous';
import Paper from 'material-ui/Paper';
import { cyan500, white } from 'material-ui/styles/colors';

export const AppBar = glamorous(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px 20px',
  backgroundColor: `${cyan500} !important`
});

export const AppTitle = glamorous.h2({
  color: white
});

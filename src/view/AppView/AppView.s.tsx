import glamorous from 'glamorous';

export const AppWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%'
});

export const MainWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  alignContent: 'stretch',
  height: '100%'
});

export const ContentWrapper = glamorous.main({
  width: '100%',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto'
});

export const LeftNavigatonMenuWrapper = glamorous.div({
  width: '300px'
})

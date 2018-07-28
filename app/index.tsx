import { appDetector } from 'detector';
import { ComponentClass } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as StoreProvider, StatelessComponent } from 'react-redux';
import { routerMiddleware, routerReducer, ConnectedRouter } from 'react-router-redux';
import { appReducer } from 'reducer';
import { reduceReducers } from 'reducer/reduceReducers';
import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import { createDetectorEnhancer, DetectableStore } from 'redux-detector';
import thunkMiddleware from 'redux-thunk';
import * as container from 'container';
import createBrowserHistory from 'history/createBrowserHistory';
import { combineReducers } from 'reducer/combineReducers';
import { markAsyncAction } from 'store/markAsyncAction';
import { AppView } from 'view/AppView/AppView';
import WebFont from 'webfontloader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { reducer as formReducer } from 'redux-form';

const history = createBrowserHistory();

if (process.env.NODE_ENV === 'production') {
  let shouldUpdate = false;

  import('offline-plugin/runtime').then(OfflinePluginRuntime => {
    OfflinePluginRuntime.install({
      onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
      onUpdated: () => (shouldUpdate = true)
    });
  });

  history.listen(location => {
    if (shouldUpdate) {
      // reload application
      window.location.assign(location.toString());
    }
  });
}

if (!(window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  // tslint:disable-next-line:no-console
  console.log(
    'Download the Redux DevTools for a better development experience: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension'
  );
}

const composeEnhancers =
  window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionSanitizer: markAsyncAction
      })
    : compose;

const enhancer: StoreEnhancer<any> = composeEnhancers(
  createDetectorEnhancer(appDetector),
  applyMiddleware(routerMiddleware(history), thunkMiddleware.withExtraArgument(container))
);

const rootReducer = reduceReducers(routerReducer as any, combineReducers<any>({ form: formReducer }));

const store: DetectableStore<any> = createStore(
  reduceReducers(rootReducer, appReducer),
  undefined,
  enhancer
) as DetectableStore<any>;

if (module.hot) {
  module.hot.accept('reducer', async () => {
    const { appReducer: nextAppReducer } = await import('reducer');
    store.replaceReducer(reduceReducers(rootReducer, nextAppReducer));
  });
  module.hot.accept('detector', async () => {
    const { appDetector: nextAppDetector } = await import('detector');
    store.replaceDetector(nextAppDetector);
  });
}

WebFont.load({
  google: {
    families: ['Open Sans:300,400,500,600,700', 'sans-serif']
  }
});

function render(Component: ComponentClass<any> | StatelessComponent<any>, root: HTMLElement): void {
  ReactDOM.render(
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <Component />
        </MuiThemeProvider>
      </ConnectedRouter>
    </StoreProvider>,
    root
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  if (root) {
    if (module.hot) {
      module.hot.accept('view/AppView/AppView', async () => {
        const { AppView: NextAppView } = await import('view/AppView/AppView');
        render(NextAppView, root);
      });
    }
    render(AppView, root);
  } else {
    // tslint:disable-next-line:no-console
    throw new Error('Cannot mount React application - there is no #root element in document body.');
  }
});

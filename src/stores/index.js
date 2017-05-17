import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers';
import promiseMiddleware from 'redux-promise-middleware'

const logger = createLogger()
const promise = promiseMiddleware()

function reduxStore(initialState) {

  const store = createStore(reducers, initialState,
    applyMiddleware (thunk, logger, promise),
    window.devToolsExtension && window.devToolsExtension());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;

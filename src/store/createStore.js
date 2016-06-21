import { createStore, compose, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

// Function that accepts an initial state of application
// and returns Redux store object
// More info about store you can find here: http://redux.js.org/docs/basics/Store.html
export default function configureStore(initialState) {

  // Prepare middleware before creating store
  const middleware = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    // Add logger middleware for development env
    middleware.push(loggerMiddleware({ collapsed: true }));
  }

  // Create a Redux store holding the state of your app.
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  if (process.env.NODE_ENV !== 'production') {
     // Enable Webpack hot module replacement for reducers
    if (module.hot) {
      module.hot.accept(() => {
        const nextRootReducer = require('../reducers/index').default;
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store;
}

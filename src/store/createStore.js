import { createStore, compose, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const middleware = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(loggerMiddleware({ collapsed: true }));
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept(() => {
        const nextRootReducer = require('../reducers/index').default;
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  return store;
}

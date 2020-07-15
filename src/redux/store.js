import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { verifyAuth } from './actions/authActions.js';
import rootReducer from './reducers/rootReducer';

export default function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunk,logger)
    );
    store.dispatch(verifyAuth());
    return store;
};


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './authReducer';
import { verifyAuth } from './actions';

export default function configureStore(persistedState) {
    const store = createStore(
      authReducer,
      persistedState,
      applyMiddleware(thunk,logger)
    );
    store.dispatch(verifyAuth());
    return store;
};


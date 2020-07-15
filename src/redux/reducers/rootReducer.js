import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    auth: authReducer,
});

export default rootReducer;


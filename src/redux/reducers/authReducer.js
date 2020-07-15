import * as ActionTypes from '../actions/actionTypes';

const authReducer = (state={
    isAuthenticated: false,
    isLoggingIn: false,
    loginError: false,
    logoutError: false,
    isVerifying: true,
    userDetails: {},
}, action) => {
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST: 
            return { ...state, isLoggingIn: true }
        
        case ActionTypes.LOGIN_SUCCESS:
            return {...state, isAuthenticated: true, isLoggingIn: false, userDetails: action.payload, loginError: false}

        case ActionTypes.LOGIN_FAILED:
            return {...state, isAuthenticated: false, isLoggingIn: false, loginError: action.payload, userDetails: {} }

        
        
        
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state, isAuthenticated: false, userDetails: {}, loginError: false}

        case ActionTypes.LOGOUT_FAILED:
            return {...state, isAuthenticated: true, logoutError: action.payload}
    
        
        
        
        case ActionTypes.VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };

        case ActionTypes.VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };

        
        
        
        case ActionTypes.REGISTER_REQUEST:
            return {...state, registered: false, registering: true, registerError: false  }
        
        case ActionTypes.REGISTER_SUCCESS:
            return {...state, registered: true, registering: false, registerError: false  }

        case ActionTypes.REGISTER_FAILED:
            return {...state, registered: false, registering: false, registerError: action.payload }


            
        default:
            return state
    }
};

export default authReducer;
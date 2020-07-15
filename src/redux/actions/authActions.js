import * as ActionTypes from './actionTypes';
import { auth, db } from "../../api/fbConfig";

const loginRequest = () => ({
    type: ActionTypes.LOGIN_REQUEST
});

const loginSuccess = (user) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
});

const loginError = (error) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: error
});

const logoutFailed = (error) => ({
    type: ActionTypes.LOGOUT_FAILED
});

const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
});

const verifyRequest = () => {
    return {
        type: ActionTypes.VERIFY_REQUEST
    };
};
  
const verifySuccess = () => {
    return {
        type: ActionTypes.VERIFY_SUCCESS
    };
};

const registerSuccess = () => ({
    type: ActionTypes.REGISTER_SUCCESS
});

const registerFailed = (error) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: error
});

const registerRequest = () => ({
    type: ActionTypes.REGISTER_REQUEST
});



const loginUser = (email,password) => (dispatch) => {
    dispatch(loginRequest());

    return auth.signInWithEmailAndPassword(email, password)
        .then((user)=>dispatch(loginSuccess(user)))
        .catch((error) => {
            dispatch(loginError(error))});
};

const logoutUser = () => (dispatch) => {
    return auth.signOut()
        .then(()=>dispatch(logoutSuccess()))
        .catch((error)=>dispatch(logoutFailed(error)));
};

const verifyAuth = () => (dispatch) => {
    dispatch(verifyRequest());

    return auth.onAuthStateChanged((user)=>{
        if(user !== null){
            dispatch(loginSuccess(user));
        };

        dispatch(verifySuccess());
    })
};

const registerUser = (email,password,name) => (dispatch) => {
    dispatch(registerRequest);

    return auth.createUserWithEmailAndPassword(email, password)
        .then(({user:{uid}})=>{
            dispatch(registerSuccess())
            return uid
        })
        .then((uid)=>{
            return dispatch(loginUser(email,password))
                        .then(()=>uid)
        })
        .then((uid)=>{
            db.collection('users').doc(uid.toString()).set({
                name
            });
            return true
        })
        .catch((error)=>{
            dispatch(registerFailed(error))
            return false;
        });
} 

export { loginUser, logoutUser, verifyAuth, registerUser };
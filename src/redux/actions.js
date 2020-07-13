import * as ActionTypes from './actionTypes';
import { auth, db } from "../api/fbConfig";

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

    auth.signInWithEmailAndPassword(email, password)
        .then((user)=>dispatch(loginSuccess(user)))
        .catch((error) => {
            dispatch(loginError(error))});
};

const logoutUser = () => (dispatch) => {
    auth.signOut()
        .then(()=>dispatch(logoutSuccess()))
        .catch((error)=>dispatch(logoutFailed(error)));
};

const verifyAuth = () => (dispatch) => {
    dispatch(verifyRequest());

    auth.onAuthStateChanged((user)=>{
        if(user !== null){
            dispatch(loginSuccess(user));
        };

        dispatch(verifySuccess());
    })
};

const registerUser = (email,password,name) => (dispatch) => {
    dispatch(registerRequest);

    auth.createUserWithEmailAndPassword(email, password)
        .then(({user:{uid}})=>{
            dispatch(registerSuccess())
            dispatch(loginUser(email,password))
            return uid
        })
        .then((uid)=>{
            db.collection('users').doc(uid.toString()).set({
                name
            });
        })
        .catch((error)=>dispatch(registerFailed(error)));
} 

export { loginUser, logoutUser, verifyAuth, registerUser };
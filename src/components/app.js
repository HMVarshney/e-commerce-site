import React from 'react';
import Navbar from './navbar/navbar';
import Login from './login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './privateRoute';
import Home from './home';
import SignUp from './signup';

const App = (props) => {
    const { isAuthenticated, isVerifying } = props.auth;

    return(
        <>
            <Navbar />
            <Switch>
                <PrivateRoute exact path='/' component={Home} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Redirect to='/' />
            </Switch>
        </>
    );
};

const stateToProps = (state) => ({
    auth:{
        isAuthenticated: state.isAuthenticated,
        isVerifying: state.isVerifying
    }
});

export default (connect(stateToProps)(App));
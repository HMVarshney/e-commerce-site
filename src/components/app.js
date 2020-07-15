import React, { useEffect } from 'react';
import Navbar from './navbar/navbar';
import Login from './login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './privateRoute';
import Home from './home';
import SignUp from './signup';
import AddData from './addDataToServer';
import Listings from './listings/listings';

const App = (props) => {
    const { isAuthenticated, isVerifying } = props.auth;

    // useEffect(()=>{
    //     db.collection('users').get()
    //         .then((res)=>{
    //             const users = res.docs.map((doc)=>{
    //                 return {...doc.data(), id: doc.id}
    //             })
    //             return users.find((user)=>user.id==='6wcwfRNfn4VM8NeEC7EJlSJA2ri2')
    //         })
    //         .then((users)=>console.log(users))    
    // },[]);

    return(
        <>
            <Navbar />
            <Switch>
                <PrivateRoute exact path='/' component={Home} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
                <PrivateRoute exact path='/listings' component={Listings} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/add_data' component={AddData} />
                <Redirect to='/' />
            </Switch>
        </>
    );
};

const stateToProps = (state) => ({
    auth:{
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    }
});

export default (connect(stateToProps)(App));
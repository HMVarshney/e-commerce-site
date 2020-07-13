import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, isVerifying, ...rest}) => {
    return(
        <Route {...rest} render={(props)=>
            isVerifying ? (<div /> ): isAuthenticated ? (<Component />) : (<Redirect to={{pathname:'/login', state:{from:props.location}}} />)
        }/>
    );
}

export default PrivateRoute;
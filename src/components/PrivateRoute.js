import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    // If the client does not have a JWT in local storage, redirect to the login page
    return (
        <Route
            {...rest}
            render={props => localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/login' />}
        />
    );
};

export default PrivateRoute;
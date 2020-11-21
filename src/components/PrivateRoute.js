import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    // If the client does not have a JWT in local storage, redirect to the login page
    const localToken = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={props => localStorage.getItem('token') && localToken !== 'undefined' ? <Component {...props} /> : <Redirect to='/login' />}
        />
    );
};

export default PrivateRoute;
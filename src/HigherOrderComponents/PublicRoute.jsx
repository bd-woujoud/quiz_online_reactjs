import React from 'react'
import { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PublicRoute({ component: Component, restricted, ...rest }) {

    const {isauth} = useContext(AuthContext)

    return (
        <Route {...rest} render={props => (
            isauth && restricted ?
                <Redirect to="/dash" />
                : <Component {...props} />
        )} />
    )
}

export default PublicRoute
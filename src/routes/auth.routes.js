import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Autenticacao from "../pages/autenticacao";
import Home from "../pages/home";

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useAuth();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Autenticacao} />
            <CustomRoute isPrivate exact path="/" component={Home} />
        </Switch>
    );
}

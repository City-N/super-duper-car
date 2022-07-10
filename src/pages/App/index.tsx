/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from 'pages/SignIn';
import MainPage from 'pages/Main';
import SignUpPage from 'pages/SignUp';

export const App: FC<{}> = () => {
    const isAuthenticated = true;
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (!isAuthenticated ? <Redirect to='/sign_in' /> : <MainPage />)}
            />
            <Route exact path="/sign_in" component={SignInPage} />
            <Route exact path="/sign_up" component={SignUpPage} />
        </Switch>
    );
};

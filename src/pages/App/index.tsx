import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from 'pages/SignIn';
import MainPage from 'pages/Main';
import SignUpPage from 'pages/SignUp';
import ForumPage from 'pages/Forum';

export const App = () => {
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
            <Route exact path="/leaders" component={ForumPage} />
        </Switch>
    );
};

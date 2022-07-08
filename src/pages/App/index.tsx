import React, { FC, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from 'pages/SignIn';
import MainPage from 'pages/Main';

export const App: FC<{}> = () => {
    const [isAuthenticated, setAuth] = useState<boolean>(true);
    return (
        <Switch>
            <Route 
                exact 
                path="/"
                render={() => !isAuthenticated ? <Redirect to='/sign_in' /> : <MainPage />} 
            />
            <Route exact path="/sign_in" component={SignInPage} />
        </Switch>
    )
};

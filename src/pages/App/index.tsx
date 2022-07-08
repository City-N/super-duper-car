import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SignInPage from 'pages/SignIn';

export const App: FC<{}> = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignInPage} />
        </Switch>
    )
};

import React, { useEffect, useState } from 'react';
import {
    Switch, Route, Redirect, useHistory, RouterProps,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import SignInPage from 'pages/SignIn';
import MainPage from 'pages/Main';
import SignUpPage from 'pages/SignUp';
import ForumPage from 'pages/Forum';
import LeaderTablePage from 'pages/LeaderTable';
import NotFoundErrorPage from 'pages/NotFoundError';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import fetchUser, { showUserData } from 'store/slices/GetUserSlice';

type TOwnProps = {
    error?: Error;
};

type TProps = TOwnProps;

function ErrorFallback({ error }: TProps) {
    return (
        <div role="alert">
            <p>Что-то пошло не так:</p>
            <pre>{error?.message}</pre>
        </div>
    );
}

export const App = () => {
    const history: RouterProps['history'] = useHistory();
    const dispatch = useAppDispatch();
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    const { data } = useAppSelector(showUserData);

    const redirectoToHomePage = () => history.push('/');

    useEffect(() => {
        dispatch(fetchUser())
            .then(() => {
                if (data.id !== 0) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            })
            .then(() => redirectoToHomePage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.id]);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
        >
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (isAuthenticated ? <MainPage /> : <Redirect to='/sign_in' />)}
                />
                <Route exact path="/sign_in" component={SignInPage} />
                <Route exact path="/sign_up" component={SignUpPage} />
                <Route exact path="/leaders" component={LeaderTablePage} />
                <Route exact path="/forum" component={ForumPage} />
                <Route exact path="*" component={NotFoundErrorPage} />
            </Switch>
        </ErrorBoundary>
    );
};

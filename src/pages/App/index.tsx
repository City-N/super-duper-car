import React, { useEffect } from 'react';
import {
    Switch, Route, useHistory, RouterProps,
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
import Header from 'components/Header';

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
    const { data } = useAppSelector(showUserData);

    const redirectoToHomePage = () => history.push('/');

    useEffect(() => {
        dispatch(fetchUser()).then(({ payload }) => {
            if (payload.id) {
                redirectoToHomePage();
            } else {
                history.push('/sign_in');
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.id]);

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/sign_in" component={SignInPage} />
                <Route path="/sign_up" component={SignUpPage} />
                <Route path="/leaders" component={LeaderTablePage} />
                <Route path="/forum" component={ForumPage} />
                <Route exact path="*" component={NotFoundErrorPage} />
            </Switch>
        </ErrorBoundary>
    );
};

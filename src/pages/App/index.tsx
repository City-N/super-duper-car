import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import SignInPage from 'pages/SignIn';
import MainPage from 'pages/Main';
import SignUpPage from 'pages/SignUp';
import { useAppDispatch } from 'hooks/redux';
import fetchUser from 'store/slices/GetUserSlice';

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
    const dispatch = useAppDispatch();
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchUser())
            .then(({ payload }) => setAuthenticated(
                Object.keys(payload).length === 0 && payload.constructor === Object,
            ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
        >
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (!isAuthenticated ? <MainPage /> : <Redirect to='/sign_in' />)}
                />
                <Route exact path="/sign_in" component={SignInPage} />
                <Route exact path="/sign_up" component={SignUpPage} />
            </Switch>
        </ErrorBoundary>
    );
};

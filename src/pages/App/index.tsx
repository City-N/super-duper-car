import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import SignInPage from 'pages/SignIn';
import MainPage from 'pages/Main';
import SignUpPage from 'pages/SignUp';

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
    const isAuthenticated = true;
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
        >
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (!isAuthenticated ? <Redirect to='/sign_in' /> : <MainPage />)}
                />
                <Route exact path="/sign_in" component={SignInPage} />
                <Route exact path="/sign_up" component={SignUpPage} />
            </Switch>
        </ErrorBoundary>
    );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router } from 'react-router-dom';

import { App as Root } from 'pages/App';
import theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';

const store = configureStore({
    reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const App = () => (
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Root />
                </ThemeProvider>
            </Provider>
        </Router>
    </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

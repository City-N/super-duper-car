import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App as Root } from 'pages/App';
import theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import colors from 'colors';
import { setupStore } from 'store/store';

const store = setupStore();

const App = () => (
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container
                        sx={{
                            minWidth: '320px',
                            height: '100%',
                            minHeight: 'calc(100vh)',
                            backgroundColor: colors.main,
                            maxWidth: 'none !important',
                            padding: '0 !important',
                        }}
                    >
                        <Root />
                    </Container>
                </ThemeProvider>
            </Provider>
        </Router>
    </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

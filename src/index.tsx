import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App as Root } from 'pages/App';
import theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';

const App = () => (
    <React.StrictMode>
        <Router>
            <ThemeProvider theme={theme}>
                <Root />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

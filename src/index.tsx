import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from 'pages/Root';

import theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';


const App = () => (
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

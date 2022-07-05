import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from 'pages/Root';

const App = () => (
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import cn from 'classnames';
import css from './Root.module.css';

import Button from '@mui/material/Button';

export const Root = () => (
    <main className={cn(css.main, css.container)}>
        <Button variant="text">Text</Button>
        <Button 
            sx={{ boxShadow: (theme) => theme.shadows[1] }} 
            variant="contained"
        >
            Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
    </main>
);

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const MainPage = () => (
    <Button
        variant='contained'
        sx={{ boxShadow: theme => theme.shadows[1] }}
    >
        <Link to='/sign_in'>Войти</Link>
    </Button>
);

export default MainPage;

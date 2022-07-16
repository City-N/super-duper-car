import React from 'react';
import { Button } from '@mui/material';
import { logout } from 'API/auth-api';
import CanvasComponent from 'Game/Canvas';

const MainPage = () => (
    <>
        <Button
            variant='contained'
            sx={{ boxShadow: theme => theme.shadows[1] }}
            onClick={() => logout()}
        >
        Выйти
        </Button>
        <CanvasComponent />
    </>
);

export default MainPage;

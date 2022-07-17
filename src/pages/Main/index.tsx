import React from 'react';
import { Button } from '@mui/material';
import {
    useHistory, RouterProps,
} from 'react-router-dom';
import { logout } from 'API/auth-api';
import CanvasComponent from 'components/Canvas/Canvas';

const MainPage = () => {
    const history: RouterProps['history'] = useHistory();

    return (
        <>
            <Button
                variant='contained'
                sx={{ boxShadow: theme => theme.shadows[1] }}
                onClick={() => logout().then(() => history.push('/sign_in'))}
            >
                Выйти
            </Button>
            <CanvasComponent />
        </>
    );
};

export default MainPage;

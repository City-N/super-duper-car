import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const MainPage: FC<{}> = () => {
    const handleClick = useCallback(() => console.log('CLICK'), []);
    return (
        <Button
            variant='contained'
            sx={{ boxShadow: (theme) => theme.shadows[1] }}
            onClick={handleClick}
        >
            <Link to='/sign_in'>Войти</Link>
        </Button>
    );
};

export default MainPage;

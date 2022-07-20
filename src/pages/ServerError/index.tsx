import React from 'react';
import Error from 'components/error';
import { Box } from '@mui/material';
import serverErrorImage from '../../img/serverError.png';

const ServerError = () => (
    <Box sx={{ p: 4 }}>
        <Error image={ serverErrorImage } text="Внутренняя ошибка сервера. Мы скоро все исправим!" />
    </Box>
);

export default ServerError;

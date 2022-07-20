import React from 'react';
import Error from 'components/error';
import { Box } from '@mui/material';
import notFoundImage from '../../img/notFound.png';

const NotFoundError = () => (
    <Box sx={{ p: 4 }}>
        <Error image={ notFoundImage } text="К сожалению, запрашиваемая страница не найдена 😔" />
    </Box>
);

export default NotFoundError;

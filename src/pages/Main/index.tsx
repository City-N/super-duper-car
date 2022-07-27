import React from 'react';
import Header from 'components/Header';
import CanvasComponent from 'components/Canvas/Canvas';
import { Box } from '@mui/material';

const MainPage = () => <>
    <Header />
    <Box sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <CanvasComponent />
    </Box>
</>;

export default MainPage;

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                opacity: 0.8,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ display: 'flex' }}>
                <CircularProgress color="error" />
            </Box>
        </Box>
    );
}

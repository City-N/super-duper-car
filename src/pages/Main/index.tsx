/* eslint-disable camelcase */
import React, { useState } from 'react';
import CanvasComponent from 'components/Canvas/Canvas';
import {
    Box, Button, Grid, Typography,
} from '@mui/material';
import { useAppSelector } from 'hooks/redux';

const MainPage = () => {
    const [isStarted, setStarted] = useState<boolean>(() => false);
    const { first_name } = useAppSelector(state => state.user.data);

    const handleStart = () => setStarted(!isStarted);

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" direction='column'>
                <Grid item xs={12}>
                    { isStarted
                        ? <CanvasComponent />
                        : (
                            <Box
                                sx={{
                                    width: '736px',
                                    height: '472px',
                                    borderRadius: '32px',
                                    backgroundColor: 'ActiveBorder',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography
                                    variant='h5'
                                    component="div"
                                    gutterBottom
                                >
                                    Привет, {first_name}
                                </Typography>
                                <Typography variant='body2' component="div" gutterBottom>
                                    Управление на клавиши W и S
                                </Typography>
                            </Box>
                        )
                    }
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='secondary' onClick={handleStart}>Start</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='outlined' color='secondary' onClick={() => window.location.reload()}>Играть еще раз</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainPage;

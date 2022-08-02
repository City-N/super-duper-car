/* eslint-disable camelcase */
import React, { useState } from 'react';
import CanvasComponent from 'components/Canvas/Canvas';
import {
    Box, Button, Grid, Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import { useAppSelector } from 'hooks/redux';

const MainPage = () => {
    const [isStarted, setStarted] = useState<boolean>(() => false);
    const { first_name } = useAppSelector(state => state.user.data);

    const handleStart = () => setStarted(!isStarted);

    return (
        <Box
            id="game"
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={2} justifyContent="center" alignItems="center" direction='column'>
                <Grid item xs={12}>
                    {isStarted
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
                                    Привет, {first_name} 👋
                                </Typography>
                                <Typography variant='body2' component="div" gutterBottom>
                                    Управление на клавиши W и S
                                </Typography>
                            </Box>
                        )
                    }
                </Grid>
                <Grid item xs={12}>
                    {isStarted
                        ? <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleStart}
                            startIcon={<PauseIcon />}
                        >
                            Пауза
                        </Button>
                        : <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleStart}
                            startIcon={<PlayArrowIcon />}
                        >
                            Погнали
                        </Button>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={() => window.location.reload()}
                        startIcon={<ReplayIcon />}
                    >
                        Играть еще раз
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainPage;

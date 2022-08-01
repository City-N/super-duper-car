/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
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
    const [isFullscreen, setIsFullscreen] = useState<boolean>(() => false);
    const [fullScreenText, setFullScreenText] = useState<string>('На весь экран');
    const { first_name } = useAppSelector(state => state.user.data);

    const toggler = document.getElementById('game');

    const handleStart = () => setStarted(!isStarted);

    const handleActivateFullscreen = (element: HTMLElement) => {
        setIsFullscreen(!isFullscreen);
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    };

    const handleDeactivateFullscreen = () => {
        setIsFullscreen(!isFullscreen);
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        const { fullscreenElement } = document;

        const onFullscreenChange = () => {
            if (!fullscreenElement) {
                setFullScreenText('Свернуть');
            } else {
                setFullScreenText('На весь экран');
            }
        };

        document.addEventListener('fullscreenchange', onFullscreenChange);

        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, [isFullscreen]);

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
                    { !isFullscreen
                        ? <Button
                            variant='outlined'
                            color='secondary'
                            onClick={() => handleActivateFullscreen(toggler as HTMLElement)}
                        >
                            {fullScreenText}
                        </Button>
                        : <Button
                            variant='outlined'
                            color='secondary'
                            onClick={handleDeactivateFullscreen}
                        >
                            {fullScreenText}
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

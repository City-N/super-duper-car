import React, { MutableRefObject } from 'react';
import useCanvas from 'hooks/useCanvas';
import { Button, Grid } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import style from './canvas.module.css';

const CanvasComponent = () => {
    const [canvasRef, isRefrashed, setRefrashed] = useCanvas();

    const handleRefrashCanvas = () => {
        setRefrashed(!isRefrashed);
    };

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            canvasRef.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    document.addEventListener(
        'keydown',
        e => {
            if (e.code === 'KeyF') toggleFullScreen();
        },
        false,
    );

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <Grid item xs={12}>
                <canvas
                    id="game"
                    className={style.Canvas}
                    ref={canvasRef as MutableRefObject<HTMLCanvasElement>}
                    width={736}
                    height={472}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleRefrashCanvas}
                    startIcon={<ReplayIcon />}
                >
                    Играть еще раз
                </Button>
            </Grid>
        </Grid>
    );
};

export default CanvasComponent;

import React, { useRef, useEffect, MutableRefObject } from 'react';
import colors from 'colors';

import style from './canvas.module.css';
import Sky from '../img/game_sprites/city/Sky.png';
import Road from '../img/game_sprites/city/Road.png';
import Back from '../img/game_sprites/city/back.png';

const CanvasComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;

    const imageBG = new Image();
    const imageRoad = new Image();
    const imageBack = new Image();

    const CanvasXSize = 736;
    const CanvasYSize = 472;

    const renderSky = (ctx: CanvasRenderingContext2D) => {
        imageBG.src = Sky;

        imageBG.onload = () => {
            ctx?.drawImage(imageBG, 0, 0, CanvasXSize, CanvasYSize);
        };
    };

    const renderBack = (ctx: CanvasRenderingContext2D) => {
        imageBack.src = Back;

        imageBack.onload = () => {
            ctx?.drawImage(imageBack, 0, 0, CanvasXSize, CanvasYSize);
        };
    };

    const renderRoad = (ctx: CanvasRenderingContext2D) => {
        imageRoad.src = Road;

        imageRoad.onload = () => {
            ctx?.drawImage(imageRoad, 0, 0, CanvasXSize, CanvasYSize);
        };
    };

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
        canvasRef.current.width = CanvasXSize;
        canvasRef.current.height = CanvasYSize;
        renderSky(ctx);
        renderBack(ctx);
        renderRoad(ctx);
    }, []);

    return (
        <>
            <canvas
                className={style.Canvas}
                ref={canvasRef}
                style={{ backgroundColor: colors.canvasBG }}
            />
        </>
    );
};

export default CanvasComponent;

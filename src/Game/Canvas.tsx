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

    const renderSky = (ctx: CanvasRenderingContext2D) => {
        imageBG.src = Sky;
        imageBG.style.width = '736px';
        imageBG.style.height = '472px';

        imageBG.onload = () => {
            ctx?.drawImage(imageBG, 0, 0, 300, 150);
            ctx.imageSmoothingEnabled = false;
        };
    };

    const renderBack = (ctx: CanvasRenderingContext2D) => {
        imageBack.src = Back;
        imageBack.style.width = '736px';
        imageBack.style.height = '472px';

        imageBack.onload = () => {
            ctx?.drawImage(imageBack, 0, 0, 300, 150);
            ctx.imageSmoothingEnabled = false;
        };
    };

    const renderRoad = (ctx: CanvasRenderingContext2D) => {
        imageRoad.src = Road;
        imageRoad.style.width = '736px';
        imageRoad.style.height = '472px';

        imageRoad.onload = () => {
            ctx?.drawImage(imageRoad, 0, 0, 300, 150);
            ctx.imageSmoothingEnabled = false;
        };
    };

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
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

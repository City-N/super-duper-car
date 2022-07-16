import React, { useRef, useEffect, MutableRefObject } from 'react';
import colors from 'colors';

import style from './canvas.module.css';
import Sky from '../img/game_sprites/city/Sky.png';

const CanvasComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;
    const image = new Image();

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        image.src = Sky;
        image.onload = () => ctx?.drawImage(image, 0, 0, 400, 200);

        // ctx.fillRect(0, 0, 100, 100);
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

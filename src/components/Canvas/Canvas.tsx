import React from 'react';
import colors from 'colors';

import useCanvas from 'hooks/useCanvas';
import style from './canvas.module.css';
import draw from '../../Game/game';

const CanvasComponent = () => {
    const canvasRef = useCanvas({ draw });

    return (
        <canvas
            className={style.Canvas}
            ref={canvasRef}
            style={{ backgroundColor: colors.canvasBG }}
        />
    );
};

export default CanvasComponent;

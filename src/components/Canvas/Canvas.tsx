import React from 'react';

import useCanvas from 'hooks/useCanvas';
import style from './canvas.module.css';
import draw from '../../Game/game';

const CanvasComponent = () => {
    const canvasRef = useCanvas({ draw });
    return <>
        <canvas
            className={style.Canvas}
            ref={canvasRef}
            width={736}
            height={472}
        />
    </>;
};

export default CanvasComponent;

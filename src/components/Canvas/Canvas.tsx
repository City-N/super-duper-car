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
            width={736}
            height={472}
        />
        // <div className={style.Stage} id="stage">
        //     <canvas
        //         className={style.Canvas}
        //         ref={canvasRef}
        //         style={{ backgroundColor: colors.canvasBG }}
        //         width={736}
        //         height={472}
        //     />
        //     <canvas
        //         ref={canvasHeroRef}
        //         className={style.Hero}
        //         width={244}
        //         height={204}
        //     />
        // </div>
    );
};

export default CanvasComponent;

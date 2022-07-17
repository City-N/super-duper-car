/* eslint-disable no-param-reassign */
import { CANVAS_X_SIZE, CANVAS_Y_SIZE } from 'Game/game_constants';

type TPosition = {
    x: number;
    y: number;
    dx: number;
    dy: number;
};

const infiniteLoopBG = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    SPRITE_POS: TPosition,
) => {
    const imgW: number = CANVAS_X_SIZE;
    const imgH: number = CANVAS_Y_SIZE;

    img.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
        ctx.drawImage(
            img,
            SPRITE_POS.x,
            SPRITE_POS.y,
            imgW,
            imgH,
        );
    };

    if (imgW <= CANVAS_X_SIZE) {
        if (SPRITE_POS.x > CANVAS_X_SIZE) {
            SPRITE_POS.x = 0;
        }

        if (SPRITE_POS.x > (CANVAS_X_SIZE - imgW)) {
            ctx.drawImage(
                img,
                SPRITE_POS.x - CANVAS_X_SIZE,
                SPRITE_POS.y,
                imgW,
                imgH,
            );
        }
    } else {
        if (SPRITE_POS.x > CANVAS_X_SIZE) {
            SPRITE_POS.x = CANVAS_X_SIZE - imgW;
        }

        if (SPRITE_POS.x > (CANVAS_X_SIZE - imgW)) {
            ctx.drawImage(
                img,
                SPRITE_POS.x - imgW,
                SPRITE_POS.y,
                imgW,
                imgH,
            );
        }
    }

    ctx.drawImage(
        img,
        SPRITE_POS.x,
        SPRITE_POS.y,
        imgW,
        imgH,
    );
    SPRITE_POS.x += SPRITE_POS.dx;
};

export default infiniteLoopBG;

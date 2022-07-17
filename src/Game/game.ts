import Sky from '../img/game_sprites/city/Sky.png';
import Road from '../img/game_sprites/city/Road.png';
import Back from '../img/game_sprites/city/back.png';

const roadPos = {
    x: 0,
    y: 0,
    dx: 3,
    dy: -2,
};

const drawRoad = (
    ctx: CanvasRenderingContext2D,
    CANVAS_X_SIZE: number,
    CANVAS_Y_SIZE: number,
) => {
    const imageRoad = new Image();
    const imgW: number = CANVAS_X_SIZE;
    const imgH: number = CANVAS_Y_SIZE;

    imageRoad.src = Road;
    imageRoad.onload = () => {
        ctx.clearRect(0, 0, imgW, imgH);
        ctx.drawImage(
            imageRoad,
            roadPos.x,
            roadPos.y,
            CANVAS_X_SIZE,
            CANVAS_Y_SIZE,
        );
    };

    if (imgW <= CANVAS_X_SIZE) {
        if (roadPos.x > CANVAS_X_SIZE) {
            roadPos.x = 0;
        }

        if (roadPos.x > (CANVAS_X_SIZE - imgW)) {
            ctx.drawImage(
                imageRoad,
                roadPos.x - (CANVAS_X_SIZE),
                roadPos.y,
                imgW,
                imgH,
            );
        }
    } else {
        if (roadPos.x > CANVAS_X_SIZE) {
            roadPos.x = CANVAS_X_SIZE - imgW;
        }

        if (roadPos.x > (CANVAS_X_SIZE - imgW)) {
            ctx.drawImage(
                imageRoad,
                roadPos.x - (imgW + 1),
                roadPos.y,
                imgW,
                imgH,
            );
        }
    }

    ctx.drawImage(
        imageRoad,
        roadPos.x,
        roadPos.y,
        imgW,
        imgH,
    );
    roadPos.x += roadPos.dx;
};

const draw = (ctx: CanvasRenderingContext2D) => {
    const CANVAS_X_SIZE = 736;
    const CANVAS_Y_SIZE = 472;
    drawRoad(ctx, CANVAS_X_SIZE, CANVAS_Y_SIZE);
};

export default draw;

import Sky from '../img/game_sprites/city/Sky.png';
import Road from '../img/game_sprites/city/Road.png';
import Back from '../img/game_sprites/city/back.png';

const drawRoad = (
    ctx: CanvasRenderingContext2D,
    CANVAS_X_SIZE: number,
    CANVAS_Y_SIZE: number,
    count: number,
) => {
    const imageRoad = new Image();

    const roadPos = {
        x: 0,
        y: 0,
        dx: -2,
        dy: -2,
    };

    imageRoad.src = Road;
    imageRoad.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
        ctx.drawImage(
            imageRoad,
            roadPos.x,
            roadPos.y,
            CANVAS_X_SIZE,
            CANVAS_Y_SIZE,
        );
    };
    roadPos.x += count;
};

const draw = (ctx: CanvasRenderingContext2D, count?: number) => {
    const CANVAS_X_SIZE = 736;
    const CANVAS_Y_SIZE = 472;
    drawRoad(ctx, CANVAS_X_SIZE, CANVAS_Y_SIZE, count as number);
};

export default draw;

/* eslint-disable no-param-reassign */
import Sky from '../img/game_sprites/city/Sky.png';
import Road from '../img/game_sprites/city/Road.png';
import Back from '../img/game_sprites/city/back.png';
import {
    ROAD_POS, SKY_POS, BACK_CITY_POS, CANVAS_X_SIZE, CANVAS_Y_SIZE,
} from './game_constants';
import { infiniteLoopBG } from './utils/index';

const drawSky = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagSky = new Image();
    imagSky.src = Sky;

    const imgW: number = CANVAS_X_SIZE;
    const imgH: number = CANVAS_Y_SIZE;

    imagSky.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };
    ctx.drawImage(
        imagSky,
        SKY_POS.x,
        SKY_POS.y,
        imgW,
        imgH,
    );
};

const drawBackCity = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagBackCity = new Image();
    imagBackCity.src = Back;

    infiniteLoopBG(ctx, imagBackCity, BACK_CITY_POS);
};

const drawRoad = (
    ctx: CanvasRenderingContext2D,
) => {
    const imageRoad = new Image();
    imageRoad.src = Road;
    infiniteLoopBG(ctx, imageRoad, ROAD_POS);
};

const draw = (ctx: CanvasRenderingContext2D) => {
    drawSky(ctx);
    drawBackCity(ctx);
    drawRoad(ctx);
};

export default draw;

/* eslint-disable no-param-reassign */
import Sky from '../img/game_sprites/city/Sky.png';
import Road from '../img/game_sprites/city/Road.png';
import Back from '../img/game_sprites/city/back.png';
import HousesOne from '../img/game_sprites/city/houses1.png';
import HousesThree from '../img/game_sprites/city/houses3.png';
import Hero from '../img/game_sprites/truck/main.png';
import {
    ROAD_POS,
    SKY_POS,
    BACK_CITY_POS,
    HOUSES_ONE_POS,
    HOUSES_THREE_POS,
    HERO_POS,
    CANVAS_X_SIZE,
    CANVAS_Y_SIZE,
} from './game_constants';
import { infiniteLoopBG } from './utils/index';

const drawHero = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagHero = new Image();
    imagHero.src = Hero;

    const imgW = 251;
    const imgH = 135;

    imagHero.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };

    ctx.drawImage(
        imagHero,
        HERO_POS.x,
        HERO_POS.y,
        imgW,
        imgH,
    );
};

const drawSky = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagSky = new Image();
    imagSky.src = Sky;
    infiniteLoopBG(ctx, imagSky, SKY_POS);
};

const drawHousesOne = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagHousesOne = new Image();
    imagHousesOne.src = HousesOne;

    const imgW: number = CANVAS_X_SIZE;
    const imgH: number = CANVAS_Y_SIZE;

    imagHousesOne.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };
    ctx.drawImage(
        imagHousesOne,
        HOUSES_ONE_POS.x,
        HOUSES_ONE_POS.y,
        imgW,
        imgH,
    );
};

const drawHousesThree = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagHousesThree = new Image();
    imagHousesThree.src = HousesThree;

    const imgW: number = CANVAS_X_SIZE;
    const imgH: number = CANVAS_Y_SIZE;

    imagHousesThree.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };
    ctx.drawImage(
        imagHousesThree,
        HOUSES_THREE_POS.x,
        HOUSES_THREE_POS.y,
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
    drawHousesThree(ctx);
    drawHousesOne(ctx);
    drawRoad(ctx);
    drawHero(ctx);
};

export default draw;

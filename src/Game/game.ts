/* eslint-disable no-param-reassign */
import GameBG from '../img/game_sprites/city/main.png';
import Hero from '../img/game_sprites/truck/main/body/main.png';
import {
    BG_POS,
    HERO_POS,
    CANVAS_X_SIZE,
    CANVAS_Y_SIZE,
    KEYS,
} from './game_constants';
// import { infiniteLoopBG } from './utils/index';

const posX = 244;
let moveOn = 0;
let lastKey = '';

const drawHero = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagHero = new Image();
    imagHero.src = Hero;

    imagHero.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };

    ctx.drawImage(
        imagHero,
        moveOn,
        0,
        imagHero.width / 6,
        imagHero.height,
        HERO_POS.x,
        HERO_POS.y,
        imagHero.width / 6,
        imagHero.height,
    );

    if (moveOn === 1220) {
        moveOn = 0;
    }
};

const bgPosX = 25;
let moveOnBg = 0;
const drawBG = (
    ctx: CanvasRenderingContext2D,
) => {
    const imgCity = new Image();
    imgCity.src = GameBG;

    imgCity.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };

    ctx.drawImage(
        imgCity,
        moveOnBg,
        0,
        imgCity.width / 9,
        imgCity.height,
        BG_POS.x,
        BG_POS.y,
        imgCity.width / 9,
        imgCity.height,
    );

    if (moveOnBg + CANVAS_X_SIZE >= imgCity.width) {
        moveOnBg = 0;
    }
    console.log(moveOnBg);
};

// const drawSky = (
//     ctx: CanvasRenderingContext2D,
// ) => {
//     const imagSky = new Image();
//     imagSky.src = Sky;
//     infiniteLoopBG(ctx, imagSky, SKY_POS);
// };

// const drawHousesOne = (
//     ctx: CanvasRenderingContext2D,
// ) => {
//     const imagHousesOne = new Image();
//     imagHousesOne.src = HousesOne;

//     const imgW: number = CANVAS_X_SIZE;
//     const imgH: number = CANVAS_Y_SIZE;

//     imagHousesOne.onload = () => {
//         ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
//     };
//     ctx.drawImage(
//         imagHousesOne,
//         HOUSES_ONE_POS.x,
//         HOUSES_ONE_POS.y,
//         imgW,
//         imgH,
//     );
// };

// const drawHousesThree = (
//     ctx: CanvasRenderingContext2D,
// ) => {
//     const imagHousesThree = new Image();
//     imagHousesThree.src = HousesThree;

//     const imgW: number = CANVAS_X_SIZE;
//     const imgH: number = CANVAS_Y_SIZE;

//     imagHousesThree.onload = () => {
//         ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
//     };
//     ctx.drawImage(
//         imagHousesThree,
//         HOUSES_THREE_POS.x,
//         HOUSES_THREE_POS.y,
//         imgW,
//         imgH,
//     );
// };

// const drawBackCity = (
//     ctx: CanvasRenderingContext2D,
// ) => {
//     const imagBackCity = new Image();
//     imagBackCity.src = Back;

//     infiniteLoopBG(ctx, imagBackCity, BACK_CITY_POS);
// };

// const drawRoad = (
//     ctx: CanvasRenderingContext2D,
// ) => {
//     const imageRoad = new Image();
//     imageRoad.src = Road;
//     infiniteLoopBG(ctx, imageRoad, ROAD_POS);
// };

document.addEventListener('keydown', (e: KeyboardEvent) => {
    switch (e.key) {
        case 'w':
            KEYS.w.pressed = true;
            lastKey = 'w';
            break;
        case 'a':
            KEYS.a.pressed = true;
            lastKey = 'a';
            break;
        case 's':
            KEYS.s.pressed = true;
            lastKey = 's';
            break;
        case 'd':
            KEYS.d.pressed = true;
            lastKey = 'd';
            moveOn += posX;
            moveOnBg += bgPosX;
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', (e: KeyboardEvent) => {
    switch (e.key) {
        case 'w':
            KEYS.w.pressed = false;
            break;
        case 'a':
            KEYS.a.pressed = false;
            break;
        case 's':
            KEYS.s.pressed = false;
            break;
        case 'd':
            KEYS.d.pressed = false;
            break;
        default:
            break;
    }
});

const draw = (ctx: CanvasRenderingContext2D) => {
    // drawSky(ctx);
    // drawBackCity(ctx);
    // drawHousesThree(ctx);
    // drawHousesOne(ctx);
    // drawRoad(ctx);
    drawBG(ctx);
    drawHero(ctx);
};

export default draw;

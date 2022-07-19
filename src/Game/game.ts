/* eslint-disable no-param-reassign */
import { throttle } from 'utils/throttle';
import GameBG from '../img/game_sprites/city/main.png';
import Hero from '../img/game_sprites/truck/main/body/main.png';
import EnemyFirst from '../img/game_sprites/truck/enemys/main/main.png';
import {
    BG_POS,
    HERO_POS,
    CANVAS_X_SIZE,
    CANVAS_Y_SIZE,
    KEYS,
} from './game_constants';

const posX = 244;
let moveOn = 0;
let lastKey = '';

const throttleHeroMove = throttle(() => {
    if (moveOn >= 1220) {
        moveOn = 0;
    }
    moveOn += posX;
}, 80, null);

const drawHero = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagHero = new Image();
    imagHero.src = Hero;

    imagHero.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
        ctx.drawImage(imagHero, HERO_POS.x, HERO_POS.y);
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

    throttleHeroMove();
};

let moveOnEnemy = 0;

const throttleEnemyMove = throttle(() => {
    if (moveOnEnemy >= 732) {
        moveOnEnemy = 0;
    }
    moveOnEnemy += posX;
}, 80, null);

const drawEnemyFirst = (
    ctx: CanvasRenderingContext2D,
) => {
    const imageEnemy = new Image();
    imageEnemy.src = EnemyFirst;

    imageEnemy.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
        // ctx.drawImage(imageEnemy, 138, 260);
    };

    ctx.drawImage(
        imageEnemy,
        moveOnEnemy,
        0,
        imageEnemy.width / 4,
        imageEnemy.height,
        338,
        290,
        imageEnemy.width / 4,
        imageEnemy.height,
    );

    throttleEnemyMove();
};

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
    moveOnBg += 3;
};

document.addEventListener('keydown', (e: KeyboardEvent) => {
    switch (e.key) {
        case 'w':
            KEYS.w.pressed = true;
            lastKey = 'w';
            HERO_POS.y = 220;
            break;
        case 's':
            KEYS.s.pressed = true;
            lastKey = 's';
            HERO_POS.y = 260;
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
        case 's':
            KEYS.s.pressed = false;
            break;
        default:
            break;
    }
});

const draw = (ctx: CanvasRenderingContext2D) => {
    drawBG(ctx);
    drawHero(ctx);
    drawEnemyFirst(ctx);
};

export default draw;

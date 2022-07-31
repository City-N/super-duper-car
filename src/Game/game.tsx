/* eslint-disable no-param-reassign */
import throttle from 'lodash.throttle';
import GameBG from '../img/game_sprites/city/main.png';
import Hero from '../img/game_sprites/truck/main/body/main.png';
import EnemyFirst from '../img/game_sprites/truck/enemys/main.png';
import BoomEffect from '../img/game_sprites/boom/boom.png';
import {
    BG_POS,
    HERO_POS,
    ENEMY_POS,
    CANVAS_X_SIZE,
    CANVAS_Y_SIZE,
    KEYS,
} from './game_constants';

const posBoomX = 96;

let posX = 244;
let moveOnBg = 0;
let moveOn = 0;
let moveOnEnemy = 0;
let boomOnEffect = 0;
let isCrashed = false;

const throttleEnemyMove = throttle(() => {
    if (moveOnEnemy >= 732) {
        moveOnEnemy = 0;
    }
    moveOnEnemy += posX;
}, 80);

function generateRandom(): number {
    let rand = Math.random();

    rand = Math.floor(rand * 2);

    return rand;
}

const drawEnemyFirst = (
    ctx: CanvasRenderingContext2D,
) => {
    const imageEnemy = new Image();
    imageEnemy.src = EnemyFirst;

    imageEnemy.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };

    ctx.drawImage(
        imageEnemy,
        moveOnEnemy,
        0,
        imageEnemy.width / 4,
        imageEnemy.height,
        ENEMY_POS.x,
        ENEMY_POS.y,
        imageEnemy.width / 4,
        imageEnemy.height,
    );
    throttleEnemyMove();

    if (ENEMY_POS.x <= -(imageEnemy.width / 4)) {
        ENEMY_POS.x = Math.floor(Math.random() * CANVAS_X_SIZE) + 1000;
        ENEMY_POS.y = generateRandom() ? 260 : 220;
    }

    ENEMY_POS.x -= ENEMY_POS.dx;
};

const throttleBoomEffect = throttle(() => {
    if (boomOnEffect >= 1152) {
        boomOnEffect = 0;
    }
    boomOnEffect += posBoomX;
}, 80);

const drawBoom = (
    ctx: CanvasRenderingContext2D,
    X: number,
    Y: number,
) => {
    const imageBoom = new Image();
    imageBoom.src = BoomEffect;

    imageBoom.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
    };

    ctx.drawImage(
        imageBoom,
        boomOnEffect,
        0,
        imageBoom.width / 12,
        imageBoom.height,
        X,
        Y,
        imageBoom.width / 12,
        imageBoom.height,
    );
    throttleBoomEffect();
};

const throttleHeroMove = throttle(() => {
    if (moveOn >= 1220) {
        moveOn = 0;
    }
    moveOn += posX;
}, 80);

const drawHero = (
    ctx: CanvasRenderingContext2D,
) => {
    const imagHero = new Image();
    imagHero.src = Hero;

    const imageEnemy = new Image();
    imageEnemy.src = EnemyFirst;

    imagHero.onload = () => {
        ctx.clearRect(0, 0, CANVAS_X_SIZE, CANVAS_Y_SIZE);
        ctx.drawImage(imagHero, HERO_POS.x, HERO_POS.y);
    };

    if (ENEMY_POS.y === 260) {
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
        drawEnemyFirst(ctx);
    } else {
        drawEnemyFirst(ctx);
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
    }

    const frontHeroPosX = (imagHero.width / 6) - HERO_POS.x;
    const isPosXHit = frontHeroPosX >= ENEMY_POS.x;
    if (isPosXHit && HERO_POS.y === ENEMY_POS.y) {
        isCrashed = true;
        moveOn = 0;
        moveOnEnemy = 0;
        BG_POS.dx = 0;
        ENEMY_POS.dx = 0;
        posX = 0;
        drawBoom(ctx, frontHeroPosX, HERO_POS.y);
    } else {
        posX = 244;
        ENEMY_POS.dx = 2;
        BG_POS.dx = 3;
        isCrashed = false;
    }
};

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
    moveOnBg += BG_POS.dx;
};

const keyPressEvent = (e: KeyboardEvent, value: number) => {
    if (!isCrashed) {
        HERO_POS.y = value;
    } else {
        e.preventDefault();
    }
};

document.addEventListener('keydown', (e: KeyboardEvent) => {
    switch (e.code) {
        case KEYS.UP:
            keyPressEvent(e, 220);
            break;
        case KEYS.DOWN:
            keyPressEvent(e, 260);
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', (e: KeyboardEvent) => {
    switch (e.key) {
        case KEYS.UP:
            break;
        case KEYS.DOWN:
            break;
        default:
            break;
    }
});

const draw = (ctx: CanvasRenderingContext2D) => {
    drawBG(ctx);
    drawHero(ctx);
};

export default draw;

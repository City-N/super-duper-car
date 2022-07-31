const CANVAS_X_SIZE = 736;
const CANVAS_Y_SIZE = 472;

const BG_POS = {
    x: 0,
    y: 0,
    dx: 0.5,
};

const HERO_POS = {
    x: 18,
    y: 260,
    dx: 3,
};

const ENEMY_POS = {
    x: CANVAS_X_SIZE + 20,
    y: 220,
    dx: 2,
};

const KEYS = {
    UP: 'KeyW',
    RIGHT: 'KeyD',
    DOWN: 'KeyS',
    LEFT: 'KeyA',
};

export {
    CANVAS_X_SIZE,
    CANVAS_Y_SIZE,
    BG_POS,
    HERO_POS,
    ENEMY_POS,
    KEYS,
};

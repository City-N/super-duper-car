const CANVAS_X_SIZE = 736;
const CANVAS_Y_SIZE = 472;

const SKY_POS = {
    x: 0,
    y: 0,
    dx: 0.5,
    dy: -2,
};

const BACK_CITY_POS = {
    x: 0,
    y: 0,
    dx: 1,
    dy: -2,
};

const ROAD_POS = {
    x: 0,
    y: 0,
    dx: 2,
    dy: -2,
};

const HOUSES_ONE_POS = {
    x: 0,
    y: 0,
    dx: 3,
    dy: -2,
};

const HOUSES_THREE_POS = {
    x: 0,
    y: 1,
    dx: 3,
    dy: -2,
};

const HERO_POS = {
    x: 18,
    y: 250,
    dx: 3,
    dy: -2,
};

const KEYS = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
};

export {
    CANVAS_X_SIZE,
    CANVAS_Y_SIZE,
    SKY_POS,
    BACK_CITY_POS,
    ROAD_POS,
    HERO_POS,
    HOUSES_ONE_POS,
    HOUSES_THREE_POS,
    KEYS,
};

const CANVAS_X_SIZE = 736;
const CANVAS_Y_SIZE = 472;

const BG_POS = {
    x: 0,
    y: 0,
    dx: 0.5,
    dy: -2,
};

const HERO_POS = {
    x: 18,
    y: 260,
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
    BG_POS,
    HERO_POS,
    KEYS,
};

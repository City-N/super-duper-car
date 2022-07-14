// URLS
export const API_URL = 'https://ya-praktikum.tech/api/v2';
export const AVATAR_URL = `${API_URL}/resources`;
export const SIGNIN_URL = `${API_URL}/auth/signin`;
export const GET_USER_URL = `${API_URL}/auth/user`;
export const SIGNUP_URL = `${API_URL}/auth/signup`;

export const STAGES = {
    START: 0,
    DONE: 1,
    ERROR: -1,
};

export const SUBJECT_TYPES = {
    LOGOUT: 'LOGOUT',
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
    GET_USER: 'GET_USER',
};

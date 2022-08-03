// URLS
export const API_URL = 'https://ya-praktikum.tech/api/v2';
export const AVATAR_URL = '/resources';
export const SIGNIN_URL = '/auth/signin';
export const LOGOUT_URL = '/auth/logout';
export const GET_USER_URL = '/auth/user';
export const SIGNUP_URL = '/auth/signup';
export const UPDATE_PROFILE_URL = '/user/profile';
export const GET_PROFILE_URL = '/user';

// REGEX
export const REGEX_LOGIN = '^[-A-Za-z0-9_-]{3,16}$';
export const REGEX_PASSWORD = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$';
export const REGEX_TEL = '(\\+?[0-9])\\s?\\(?[0-9]{3}\\)?\\s?[0-9]{7}$';

// REG_MESSAGE
export const PASSWORD_MSG = 'Добавьте заглавную букву или цифру';
export const TEL_MSG = 'Поле в формате: +79996431241';
export const LOGIN_MSG = 'Англ. буквы, от 3 до 16 символов';
export const MAIL_MSG = 'Поле в формате email. Пример: contact@org.ru';
export const VALUE = 'Обязательно поле';

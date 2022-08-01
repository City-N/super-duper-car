// URLS
export const API_URL = 'https://ya-praktikum.tech/api/v2';
export const AVATAR_URL = '/resources';
export const SIGNIN_URL = '/auth/signin';
export const LOGOUT_URL = '/auth/logout';
export const GET_USER_URL = '/auth/user';
export const SIGNUP_URL = '/auth/signup';

//REGEX
export const REGEX_LOGIN: string = '^[-A-Za-z0-9_-]{3,16}$';
export const REGEX_PASSWORD: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$';
export const REGEX_TEL: string = '(\\+?[0-9])\\s?\\(?[0-9]{3}\\)?\\s?[0-9]{7}$';

//REG_MESSAGE
export const PASSWORD_MSG: string = 'Добавьте заглавную букву или цифру';
export const TEL_MSG: string = 'Поле в формате: +79996431241';
export const LOGIN_MSG: string = 'Англ. буквы, от 3 до 16 символов';
export const MAIL_MSG: string = 'Поле в формате email. Пример: contact@org.ru';
export const VALUE: string = 'Обязательно поле';

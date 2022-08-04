import {
    SIGNIN_URL,
    LOGOUT_URL,
    SIGNUP_URL,
} from 'constants/constants';
import { AxiosInstance } from './AxiosInstance';

interface ISignIn {
    login: string;
    password: string;
}

interface ISignUp {
    // eslint-disable-next-line camelcase
    first_name: string;
    // eslint-disable-next-line camelcase
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

interface IUser extends Omit<ISignUp, 'password'> {
    id: number;
    // eslint-disable-next-line camelcase
    display_name: string;
    avatar: string;
}

const login = <T>(data: T) => AxiosInstance.post<string>(SIGNIN_URL, data);

const logout = () => AxiosInstance.post(LOGOUT_URL);

const signup = <T>(data: T) => AxiosInstance.post<Record<string, number>>(SIGNUP_URL, data);

export {
    login, logout, signup, ISignIn, ISignUp, IUser,
};

import axios from 'axios';
import {
    SIGNIN_URL, LOGOUT_URL, SIGNUP_URL, GET_USER_URL,
} from 'constants/constants';

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

interface IUser extends ISignUp {
    id: number;
    // eslint-disable-next-line camelcase
    display_name: string;
    avatar: string;
}

const login = <T>(data: T) => axios.post<string>(SIGNIN_URL, data, { withCredentials: true });

const logout = () => axios.post(LOGOUT_URL, { withCredentials: true });

const signup = <T>(data: T) => axios.post<Record<string, number>>(
    SIGNUP_URL,
    data,
    { withCredentials: true },
);

const getUser = () => axios.get(GET_USER_URL, { withCredentials: true });

export {
    login, logout, signup, getUser, ISignIn, ISignUp, IUser,
};

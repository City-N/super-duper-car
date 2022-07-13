import axios, { AxiosResponse } from 'axios';
import { SIGNIN_URL, SIGNUP_URL, GET_USER_URL } from 'constants/constants';

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

const login = (data: ISignIn) => axios.post<AxiosResponse>(SIGNIN_URL, data);

const signup = (data: ISignUp) => axios.post<AxiosResponse>(SIGNUP_URL, data);

const getUser = () => axios.get<AxiosResponse>(GET_USER_URL);

export {
    login, signup, getUser, ISignIn, ISignUp, IUser,
};

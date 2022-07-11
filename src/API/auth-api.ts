// eslint-disable-next-line quotes
import axios from "axios";
import { SIGNIN_URL, SIGNUP_URL } from 'constants/constants';

interface IResponse {
    body: { locked: boolean; };
    bodyUsed: boolean;
    headers: unknown[];
    ok: boolean;
    redirected: false
    status: number;
    statusText: string;
    type: string;
    url: string;
}

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

const login = (data: ISignIn) => axios.post<IResponse, Promise<IResponse>>(SIGNIN_URL, data)
    .then(res => res);

const signup = (data: ISignUp) => axios.post<IResponse, Promise<IResponse>>(SIGNUP_URL, data)
    .then(res => res);

export {
    login, signup, ISignIn, ISignUp, IResponse,
};

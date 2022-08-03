import axios from 'axios';
import {
    SIGNIN_URL,
    LOGOUT_URL,
    SIGNUP_URL,
    GET_USER_URL,
    API_URL,
    GET_PROFILE_URL,
    UPDATE_PROFILE_URL,
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

interface IUser extends Omit<ISignUp, 'password'> {
    id: number;
    // eslint-disable-next-line camelcase
    display_name: string;
    avatar: string;
}

const AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
});

const login = <T>(data: T) => AxiosInstance.post<string>(SIGNIN_URL, data);

const updateProfile = <T>(data: T) => AxiosInstance.put<string>(UPDATE_PROFILE_URL, data);

const getProfile = <T>(data: T) => AxiosInstance.get<string>(`${GET_PROFILE_URL}/${data}`, data);

const logout = () => AxiosInstance.post(LOGOUT_URL);

const signup = <T>(data: T) => AxiosInstance.post<Record<string, number>>(SIGNUP_URL, data);

const getUser = () => AxiosInstance.get(GET_USER_URL);

export {
    login, logout, signup, getUser, ISignIn, ISignUp, IUser, updateProfile, getProfile,
};

import {
    AVATAR_URL, GET_PROFILE_URL, GET_USER_URL, UPDATE_PROFILE_URL,
} from 'constants/constants';
import { AxiosInstance } from './AxiosInstance';

const getUser = () => AxiosInstance.get(GET_USER_URL);

const updateProfile = <T>(data: T) => AxiosInstance.put<string>(UPDATE_PROFILE_URL, data);

const getProfile = <T>(data: T) => AxiosInstance.get<string>(`${GET_PROFILE_URL}/${data}`, data);

const updateAvatar = <T>(data: T) => AxiosInstance.put<string>(AVATAR_URL, data);

export {
    getUser, updateProfile, getProfile, updateAvatar,
};

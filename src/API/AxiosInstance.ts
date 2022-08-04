import axios from 'axios';

import {
    API_URL,
} from 'constants/constants';

export const AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
});

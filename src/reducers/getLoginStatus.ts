import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { login, getUser } from 'API/auth-api';
import type { ISignIn } from 'API/auth-api';

export interface LoginState {
    loading: boolean,
    data: string[],
}

const initialState: LoginState = {
    loading: false,
    data: [],
};

export const getUserDataAsync = () => async dispatch => {
    try {
        const response = await getUser();
        dispatch(getUserData(response.data));
    } catch (error) {
        throw new Error(error);
    }
};

export const loginUserAsync = (data: ISignIn) => async dispatch => {
    try {
        const response = await login(data);
        dispatch(addUserData(response.data));
    } catch (error) {
        throw new Error(error);
    }
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUserData: (state, action: PayloadAction<LoginState>) => {
            state.data.push(action.payload);
        },
        getUserData: (state, action: PayloadAction<LoginState>) => {
            // eslint-disable-next-line no-param-reassign
            state.data = [action.payload];
        },
    },
});

export const { getUserData, addUserData } = loginSlice.actions;
export const showUserData = state => state.login.data;
export default loginSlice.reducer;

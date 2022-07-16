/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from 'store/store';
import type { ISignIn } from 'API/auth-api';
import { login } from 'API/auth-api';

export interface ILoginState {
    isLoading: boolean;
    statusLogin: string;
    error: string;
}

const initialState: ILoginState = {
    isLoading: false,
    statusLogin: '',
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginFetching: state => {
            state.isLoading = true;
        },
        loginFetchingSuccess: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.statusLogin = action.payload;
            state.error = '';
        },
        loginFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

const { loginFetching, loginFetchingSuccess, loginFetchingError } = loginSlice.actions;

export const loginUserAsync = (data: ISignIn) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginFetching());
        const response = await login<ISignIn>(data);
        dispatch(loginFetchingSuccess(response.data));
    } catch (error) {
        dispatch(loginFetchingError((error as Error).message));
    }
};

export const showLoginData = (state: RootState) => state.login;
export default loginSlice.reducer;

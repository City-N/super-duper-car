import { STAGES, SUBJECT_TYPES } from 'constants/constants';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser, ISignIn } from 'API/auth-api';
import { login, getUser } from 'API/auth-api';
import { AppDispatch, RootState } from 'store/store';

export interface LoginState {
    isLoading: boolean;
    data: string | IUser | null;
    error: string;
}

const initialState: LoginState = {
    isLoading: false,
    data: null,
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUserData: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
        },
        getUserData: (state, action: PayloadAction<IUser>) => {
            // eslint-disable-next-line no-param-reassign
            state.data = { ...action.payload };
        },
    },
});

const { getUserData, addUserData } = loginSlice.actions;

export const getUserDataAsync = () => async (dispatch: AppDispatch) => {
    try {
        const response = await getUser<IUser>();
        dispatch(getUserData(response.data));
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginUserAsync = (data: ISignIn) => async (dispatch: AppDispatch) => {
    try {
        const response = await login<ISignIn>(data);
        dispatch(addUserData(response.data));
    } catch (error) {
        throw new Error(error.message);
    }
};

export const showUserData = (state: RootState) => state.login;
export default loginSlice.reducer;

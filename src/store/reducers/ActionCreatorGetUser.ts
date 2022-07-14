import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from 'API/auth-api';
import { getUser } from 'API/auth-api';

export const fetchUser = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await getUser<IUser>();
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить юзера');
        }
    },
);

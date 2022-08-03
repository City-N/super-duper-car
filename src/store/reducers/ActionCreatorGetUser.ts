import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from 'API/UserApi';

export const fetchUser = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await getUser();
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить юзера');
        }
    },
);

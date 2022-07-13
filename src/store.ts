import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from 'reducers/getLoginStatus';

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

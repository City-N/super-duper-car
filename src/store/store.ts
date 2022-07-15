import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginSlice } from 'store/slices/getLoginStatus';
import { userSlice } from './slices/GetUserSlice';

const rootReducer = combineReducers({
    login: loginSlice.reducer,
    user: userSlice.reducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

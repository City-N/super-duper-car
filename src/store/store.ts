import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { loginSlice } from 'store/reducers/getLoginStatus';
import { userSlice } from './reducers/GetUserSlice';

const rootReducer = combineReducers({
    login: loginSlice.reducer,
    user: userSlice.reducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

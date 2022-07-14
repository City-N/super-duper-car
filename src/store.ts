import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from 'reducers/getLoginStatus';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

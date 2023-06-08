import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [...getDefaultMiddleware(), thunkMiddleware],
});

export default store;

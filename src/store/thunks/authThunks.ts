import { loginSuccess, loginFailure, logout } from '../actions/authActions';
import client from '../../api';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type RootState = any;

export type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;
export type iTokens = { accessToken: string; refreshToken: string };

type iRegisterCreds = { password: string; username: string; displayName: string };
type iLoginCreds = { username: string; password: string };

const getTokens = () => {
    const item = localStorage.getItem('token');
    return item ? (JSON.parse(item) as iTokens) : null;
};

export const login = (credentials: iLoginCreds) => async (dispatch: AppDispatch) => {
    try {
        const response = await client.post('/auth/login', credentials);
        localStorage.setItem('token', JSON.stringify(response.data));
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
    try {
        const tokens = getTokens();
        const success = {
            headers: {
                Authorization: `Bearer ${tokens?.accessToken}`,
            },
        };
        const response = await client.get('/auth/logout', success);
        localStorage.removeItem('token');
        console.log(response);

        dispatch(logout());
    } catch (error) {
        console.log(error);
    }
};

export const registerUser = (credentials: iRegisterCreds) => async (dispatch: AppDispatch) => {
    try {
        await client.post('/auth/register', credentials);
        localStorage.removeItem('token');
        dispatch(logout());
    } catch (error) {
        console.log(error);
    }
};

export const refreshToken = () => async (dispatch: AppDispatch) => {
    try {
        const tokens = getTokens();
        const { data } = await client.post('/auth/refresh', tokens?.refreshToken);
        const updatedToken = {
            refreshToken: tokens?.refreshToken,
            accessToken: data,
        };
        dispatch(loginSuccess(updatedToken));
    } catch (error) {
        console.log(error);
    }
};

import { createSlice } from '@reduxjs/toolkit';
import { iTokens } from '../thunks/authThunks';

interface AuthState {
    token: iTokens;
    isAuthed: boolean;
}

const initialState: AuthState = {
    token: {
        accessToken: '',
        refreshToken: '',
    },
    isAuthed: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.isAuthed = true;
        },
        loginFailure: (state) => {
            state.token = {
                accessToken: '',
                refreshToken: '',
            };
            state.isAuthed = false;
        },
        logout: (state) => {
            state.token = {
                accessToken: '',
                refreshToken: '',
            };
            state.isAuthed = false;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;

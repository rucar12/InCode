import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction<any>('auth/loginSuccess');
export const loginFailure = createAction<void>('auth/loginFailure');
export const logout = createAction<void>('auth/logout');

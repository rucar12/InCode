import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../store/reducers/authSlice';
import { iTokens, refreshToken, RootState } from '../store/thunks/authThunks';
import jwtDecode from 'jwt-decode';

const getTokens = () => {
    const item = localStorage.getItem('token');
    return item ? (JSON.parse(item) as iTokens) : null;
};

const App = () => {
    const isAuthed = useSelector<RootState, boolean>((state) => state.auth.isAuthed);

    const dispatch = useDispatch();

    useEffect(() => {
        const tokens = getTokens();
        if (tokens) {
            dispatch(loginSuccess(tokens));
        }
    }, [isAuthed]);

    useEffect(() => {
        const tokens = getTokens();
        if (tokens) {
            const expiredAccess = jwtDecode(tokens.accessToken) as any;
            const accessDate = new Date(expiredAccess.exp * 1000);
            if (new Date() > accessDate) {
                dispatch(refreshToken(tokens));
            }
        }
    }, []);

    const withAuth = (component: React.ReactNode) => {
        return isAuthed ? component : <Navigate to={'/auth'} replace />;
    };
    const withoutAuth = (component: React.ReactNode) => {
        return !isAuthed ? component : <Navigate to={'/'} replace />;
    };

    return (
        <div className={styles.app}>
            <Routes>
                <Route element={withAuth(<Header />)}>
                    <Route index path="/" element={<Home />} />
                    <Route path="*" element={"There's nothing here: 404!"} />
                </Route>
                <Route path="auth" element={withoutAuth(<Auth />)} />
            </Routes>
        </div>
    );
};

export default App;

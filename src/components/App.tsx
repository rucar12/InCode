import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/reducers/authSlice';
import { iTokens } from '../store/thunks/authThunks';

const App = () => {
    const getTokens = () => {
        const item = localStorage.getItem('token');
        return item ? (JSON.parse(item) as iTokens) : null;
    };

    const dispatch = useDispatch();

    const withAuth = (component: React.ReactNode) => {
        const isAuthed = !!localStorage.getItem('token');
        return isAuthed ? component : <Navigate to={'/auth'} replace />;
    };

    useEffect(() => {
        const tokens = getTokens();
        if (tokens) {
            dispatch(loginSuccess(tokens));
        }
    }, []);

    return (
        <div className={styles.app}>
            <Routes>
                <Route element={withAuth(<Header />)}>
                    <Route index path="/" element={<Home />} />
                    <Route path="*" element="There's nothing here: 404!" />
                </Route>
                <Route path="auth" element={<Auth />} />
            </Routes>
        </div>
    );
};

export default App;

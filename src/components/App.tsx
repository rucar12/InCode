import React from 'react';
import styles from './App.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './Header';

const App = () => {
    const withAuth = (component: React.ReactNode) => {
        const isAuthed = !!localStorage.getItem('user');
        return isAuthed ? component : <Navigate to={'/auth'} replace />;
    };

    return (
        <div className={styles.app}>
            <Routes>
                <Route element={withAuth(<Header />)}>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element="There's nothing here: 404!" />
                </Route>
                <Route path="auth" element={<Auth />} />
            </Routes>
        </div>
    );
};

export default App;

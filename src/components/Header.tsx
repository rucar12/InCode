import React from 'react';
import styles from './Header.module.scss';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Link className={styles.logo} to={'/'}>
                    <h3>InCode</h3>
                    <h5>Finance</h5>
                </Link>
            </header>
            <Outlet />
        </>
    );
};

export default Header;

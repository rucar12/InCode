import React, { useState } from 'react';
import styles from './Auth.module.scss';
import Header from '../Header';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

type Tab = 'signIn' | 'signUp';

const Auth = () => {
    const [selectedTab, setSelectedTab] = useState<Tab>('signIn');

    const changeTabHandler = () => {
        setSelectedTab(selectedTab === 'signUp' ? 'signIn' : 'signUp');
    };

    const submitSignIn = () => {
        console.log('submitSignIn');
    };

    const submitSignUp = () => {
        console.log('submitSignUp');
    };

    const tab = {
        signIn: <SignIn onSubmit={submitSignIn} onChangeTab={changeTabHandler} />,
        signUp: <SignUp onSubmit={submitSignUp} onChangeTab={changeTabHandler} />,
    };

    return (
        <main className={styles.auth}>
            <Header />
            <section className={styles.tab}>{tab[selectedTab]}</section>
        </main>
    );
};

export default Auth;

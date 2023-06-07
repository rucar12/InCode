import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import Button from './Button';
import Input from './Input';

type iProps = {
    onSubmit: () => void;
    onChangeTab: () => void;
};

const SignIn = ({ onSubmit, onChangeTab }: iProps) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <section className={styles.signIn}>
            <h1>SIGN IN</h1>
            <form className={styles.form}>
                <Input
                    type={'text'}
                    placeholder={'Example123'}
                    label={'User Name'}
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                />
                <Input
                    type={'password'}
                    placeholder={'*********'}
                    label={'Password'}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />
                <Button onClick={onSubmit} className={styles.submit}>
                    Sign In
                </Button>
            </form>
            <div className={styles.auth}>
                <p className={styles.haventAccount}>
                    Don’t have account yet?
                    <span onClick={onChangeTab}> New Account</span>
                </p>
            </div>
        </section>
    );
};

export default SignIn;

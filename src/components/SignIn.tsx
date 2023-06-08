import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import Button from './Button';
import Input from './Input';
import { AppDispatch, login } from '../store/thunks/authThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type iProps = {
    onChangeTab: () => void;
};

const SignIn = ({ onChangeTab }: iProps) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogin = (e: any) => {
        e?.preventDefault();
        try {
            dispatch(login({ username, password }));
            navigate('/');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className={styles.signIn}>
            <h1>SIGN IN</h1>
            <form className={styles.form} onSubmit={handleLogin}>
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
                <Button onClick={handleLogin as any} className={styles.submit}>
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

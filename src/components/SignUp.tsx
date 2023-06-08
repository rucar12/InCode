import React, { FormEvent, useState } from 'react';
import styles from './SignUp.module.scss';
import Button from './Button';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { AppDispatch, registerUser } from '../store/thunks/authThunks';

type iProps = {
    onChangeTab: () => void;
};

const SignUp = ({ onChangeTab }: iProps) => {
    const [fullName, setFullName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();

    const handleRegister = (e: any) => {
        e?.preventDefault();
        try {
            dispatch(registerUser({ password, username, displayName: fullName }));
            onChangeTab();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className={styles.signUp}>
            <h1>SIGN UP</h1>
            <form className={styles.form} onSubmit={handleRegister}>
                <Input
                    type={'text'}
                    placeholder={'Example Name'}
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    label={'Full Name'}
                />
                <Input
                    type={'text'}
                    placeholder={'Example123'}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    label={'User Name'}
                />
                <Input
                    type={'password'}
                    placeholder={'********'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    label={'Password'}
                />
                <Input
                    type={'password'}
                    placeholder={'********'}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    label={'Confirm Password'}
                />
                <Button onClick={handleRegister as any} className={styles.submit}>
                    Sign Up
                </Button>
            </form>
            <div className={styles.createAccount}>
                <p className={styles.haveAccount}>
                    I have an account.
                    <span onClick={onChangeTab}> Go to Sign in</span>
                </p>
            </div>
        </section>
    );
};

export default SignUp;

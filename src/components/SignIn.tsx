import React from 'react';
import styles from './SignIn.module.scss';
import Button from './Button';

type iProps = {
    onSubmit: () => void;
    onChangeTab: () => void;
};

const SignIn = ({ onSubmit, onChangeTab }: iProps) => {
    return (
        <section className={styles.signIn}>
            <h1>SIGN IN</h1>
            <form className={styles.form}>
                <input type={'text'} placeholder={'User Name'} />
                <input type={'password'} placeholder={'password'} />
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

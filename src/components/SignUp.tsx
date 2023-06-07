import React from 'react';
import styles from './SignUp.module.scss';
import Button from './Button';

type iProps = {
    onSubmit: () => void;
    onChangeTab: () => void;
};

const SignUp = ({ onChangeTab, onSubmit }: iProps) => {
    return (
        <section className={styles.signUp}>
            <h1>SIGN UP</h1>
            <form className={styles.form}>
                <input type={'text'} placeholder={'Full Name'} />
                <input type={'text'} placeholder={'User Name'} />
                <input type={'password'} placeholder={'Password'} />
                <input type={'password'} placeholder={'Confirm Password'} />
                <Button onClick={onSubmit} className={styles.submit}>
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

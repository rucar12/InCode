import React from 'react';
import styles from './SignIn.module.scss';

type iProps = {
    onSubmit: () => void;
    onChangeTab: () => void;
};

const SignIn = ({ onSubmit, onChangeTab }: iProps) => {
    return <div className={styles.signIn}>SignIn</div>;
};

export default SignIn;

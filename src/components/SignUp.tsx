import React from 'react';
import styles from './SignUp.module.scss';

type iProps = {
    onSubmit: () => void;
    onChangeTab: () => void;
};

const SignUp = ({ onChangeTab, onSubmit }: iProps) => {
    return <div className={styles.signUp}>SignUp</div>;
};

export default SignUp;

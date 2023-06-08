import React from 'react';
import styles from './SignIn.module.scss';
import Button from './Button';
import Input from './Input';
import { AppDispatch, login } from '../store/thunks/authThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type iProps = {
    onChangeTab: () => void;
};

const SignIn = ({ onChangeTab }: iProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('User Name is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            dispatch(login({ username: values.username, password: values.password }));
            navigate('/');
        },
    });

    const { handleSubmit, handleChange, values, errors } = formik;

    return (
        <section className={styles.signIn}>
            <h1>SIGN IN</h1>
            <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
                <Input
                    type={'text'}
                    placeholder={'Example123'}
                    label={'User Name'}
                    onChange={handleChange}
                    value={values.username}
                    name={'username'}
                    error={errors.username}
                />
                <Input
                    type={'password'}
                    placeholder={'*********'}
                    label={'Password'}
                    onChange={handleChange}
                    value={values.password}
                    name={'password'}
                    error={errors.password}
                />
                <Button onClick={handleSubmit} className={styles.submit}>
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

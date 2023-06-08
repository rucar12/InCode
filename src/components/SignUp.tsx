import React from 'react';
import styles from './SignUp.module.scss';
import Button from './Button';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { AppDispatch, registerUser } from '../store/thunks/authThunks';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type iProps = {
    onChangeTab: () => void;
};

const SignUp = ({ onChangeTab }: iProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            username: Yup.string().required('User Name is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: (values) => {
            dispatch(
                registerUser({
                    password: values.password,
                    username: values.username,
                    displayName: values.fullName,
                })
            );
            onChangeTab();
        },
    });

    const { handleSubmit, handleChange, values, errors } = formik;

    return (
        <section className={styles.signUp}>
            <h1>SIGN UP</h1>
            <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
                <Input
                    type={'text'}
                    placeholder={'Example Name'}
                    value={values.fullName}
                    onChange={handleChange}
                    label={'Full Name'}
                    name={'fullName'}
                    error={errors.fullName}
                />
                <Input
                    type={'text'}
                    placeholder={'Example123'}
                    value={values.username}
                    onChange={handleChange}
                    label={'User Name'}
                    name={'username'}
                    error={errors.username}
                />
                <Input
                    type={'password'}
                    placeholder={'********'}
                    value={values.password}
                    onChange={handleChange}
                    label={'Password'}
                    name={'password'}
                    error={errors.password}
                />
                <Input
                    type={'password'}
                    placeholder={'********'}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    label={'Confirm Password'}
                    name={'confirmPassword'}
                    error={errors.confirmPassword}
                />
                <Button onClick={handleSubmit} className={styles.submit}>
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

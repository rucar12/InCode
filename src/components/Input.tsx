import React, { useState } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import EYE_ON_SVG from '../media/eye-on.svg';
import EYE_OFF_SVG from '../media/eye-off.svg';

type iProps = {
    className?: string;
    value: string;
    placeholder: string;
    label: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: 'text' | 'password';
};

const Input = ({ className, placeholder, value, label, onChange, type, disabled }: iProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className={classNames(styles.input, className)}>
            <label htmlFor={label} className={styles.label}>
                {label}
            </label>
            <div className={styles.inputContainer}>
                {type === 'text' && (
                    <input
                        id={label}
                        type={type}
                        value={value}
                        onChange={onChange}
                        className={classNames(styles.inputField)}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                )}
                {type === 'password' && (
                    <div className={styles.password}>
                        <input
                            id={label}
                            type={showPassword ? 'text' : type}
                            value={value}
                            onChange={onChange}
                            className={classNames(styles.inputField)}
                            disabled={disabled}
                            placeholder={placeholder}
                            autoComplete={'off'}
                        />
                        <div
                            className={styles.eye}
                            onClick={() => setShowPassword((prevState) => !prevState)}
                        >
                            {showPassword ? (
                                <img src={EYE_ON_SVG} alt="Open text" />
                            ) : (
                                <img src={EYE_OFF_SVG} alt="Open text" />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;

import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type iProps = {
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
};

const Button = ({ disabled, onClick, children, className, type = 'button' }: iProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={classNames(styles.button, className)}
        >
            <h5>{children}</h5>
        </button>
    );
};

export default Button;

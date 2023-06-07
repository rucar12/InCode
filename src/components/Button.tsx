import React from 'react';
import styles from './Button.module.scss';

type iProps = {
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

const Button = ({ disabled, onClick, children }: iProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;

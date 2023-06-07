import React from 'react';
import styles from './Home.module.scss';
import Button from '../Button';
import HOME_PNG from '../../media/HomeImg.png';
import CONGRATS_SVG from '../../media/congrats.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/auth');
    };

    return (
        <main className={styles.home}>
            <div className={styles.title}>
                <h2>Congratulations</h2>
                <img src={CONGRATS_SVG} alt={'Congratulations'} loading={'lazy'} />
            </div>
            <p className={styles.description}>
                Now you are on the main page. Soon we will provide you with detailed feedback on the
                result of your work
            </p>
            <div className={styles.logout}>
                <Button onClick={logoutHandler}>Log Out</Button>
            </div>
            <div className={styles.image}>
                <img src={HOME_PNG} alt={'Home fixics'} loading={'lazy'} />
            </div>
        </main>
    );
};

export default Home;

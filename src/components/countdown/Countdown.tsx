'use client';

import Countdown from 'react-countdown';
import styles from './styles.module.css';

const endingDate = new Date('2023-10-31');

const CountDown = () => {
    return <Countdown date={endingDate} className={styles.countdown} />;
};

export { CountDown };

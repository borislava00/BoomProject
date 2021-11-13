import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({ timeEnd = 0 , onTimeEnd = null }) {
    return (
        <div className={styles.wrapper}>
            {onTimeEnd == null ? 
                <div className={styles['product-info-timer']}></div> :

                <div className={styles['product-info-timer']}>
                    <div className={styles.title}>ENDS IN</div>
                    <div className={styles.timer}>
                        <Countdown date={Date.now() + timeEnd * 100000000} />
                    </div>
                </div>
            }
        </div>
    );
}

import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({ timeEnd = 0 , onTimeEnd = null }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles['product-info-timer']}>
                {onTimeEnd != null ?
                <div className={styles.active}>
                    <div className={styles.title}>ENDS IN</div>
                    <div className={styles.timer}>
                        <Countdown date={Date.now() + timeEnd * 100000000} onComplete={onTimeEnd} />
                    </div>           
                </div> :
                <div className={styles.notActive}></div>}
            </div>
        </div>
    );
}

import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';
import ReactDOM from 'react-dom';

const handler = () => {
    console.log('done');
}

export default function ProductInfoTimer({ timeEnd = null , onTimeEnd = handler  }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles['product-info-timer']}>
                {timeEnd != null ?
                <div className={styles.active}>
                    <div className={styles.title}>ENDS IN</div>
                    <div className={styles.timer}>
                        <Countdown date={Date.now() + timeEnd * 100000000} onComplete={() => handler(onTimeEnd)} />
                    </div>           
                </div> : <div className={styles.notActive}></div>}
            </div>
        </div>
    );
}

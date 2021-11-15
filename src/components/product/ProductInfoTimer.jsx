import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';
import { useState , useEffect } from "react";
import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const handler = () => {
    eventEmitter.emit('done');
}

export default function ProductInfoTimer({ timeEnd = null , onTimeEnd = handler }) {
    const [time, setTime] = useState(null);
    useEffect( () => {
        setTime(timeEnd);
    },[]);
    
    eventEmitter.on('done', () => setTime(null));
    
    return (
        timeEnd == null ?   <div className={styles.notActive}></div> : 
        <div className={styles.wrapper}>
            <div className={styles['product-info-timer']}>
                { time == null ? 
                    <div className={styles.notActive}></div> 
                    :
                    <div className={styles.active}>
                        <div className={styles.title}>ENDS IN</div>
                        <div className={styles.timer}>
                            <Countdown date={Date.now() + time * 100000000} onComplete={ onTimeEnd } />
                        </div>           
                    </div>
                }
            </div>
        </div>
    );
}

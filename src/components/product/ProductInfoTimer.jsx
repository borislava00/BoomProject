import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';
import { useState , useEffect } from "react";
import EventEmitter from 'eventemitter3';
import classNames from "classnames";

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
        <div className="wrapper">
            <div className={classNames(styles["product-info-timer"] , {[styles["active"]] : timeEnd })}>
                <div className={styles.title}>ENDS IN</div>
                    <div className={styles.timer}>
                    { time != null && <Countdown date={Date.now() + time * 100000000} onComplete={ onTimeEnd } />
                    }
                    </div>                                    
            </div>
        </div>
    );
}

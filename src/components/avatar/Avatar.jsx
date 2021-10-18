import classNames from "classnames";
import styles from "./Avatar.module.scss";   

function Avatar({ size = 90 , url , verified = false }) {
    return (
        <div className={classNames(styles.wrapper)} style={{ width: `${size}px` , height : `${size}px`}}>
            <img className={classNames(styles.image)} src={url} /> 
            {verified ? <img className={classNames(styles.badge)} src={'/images/verified.svg'} /> : null}
        </div>
    );
}

export default Avatar;
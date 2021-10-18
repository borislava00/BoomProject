import classNames from "classnames";
import styles from "./User.module.scss"; 
import Avatar from '../avatar/Avatar';

function User({ name = '' , info = '' , avatar = '' , size = 55 , verified = false }) {
    return (
        <div className={classNames(styles.user)} style={{ width: `${size}px` , height : `${size}px`}}>
            <Avatar url={avatar} verified={verified} />
            <div className={classNames(styles.name)}>{name}</div>
            <div className={classNames(styles.info)}>{info}</div>
        </div>
    );
}

export default User;
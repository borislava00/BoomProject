import styles from "./ProductInfoCreator.module.scss";
import User from "../user/User";

export default function ProductInfoCreator({ name = " " , avatar = " " , verified = false }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles['product-info-creator']}>
                <div className={styles.title}>CREATOR</div>
                <div className={styles['user-container']}>
                    <User className={styles.user} name={name} avatar={avatar} size={40} />
                </div>
            </div>
        </div>
    );
}
import styles from "./ProductInfoPrice.module.scss";

export default function ProductInfoPrice({ amount = 0 , currency = " " }) {
    return( 
        <div className={styles.wrapper}>
            <div className={styles['product-info-price']}>ON SALE FOR {amount} {currency}</div>
        </div>
    );
}
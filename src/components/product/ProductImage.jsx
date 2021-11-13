import styles from "./ProductImage.module.scss";

export default function ProductImage({ url = [] }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles['ProductImage_product-image']}>
                <img className={styles['ProductImage_image']} src={url} />
            </div>
        </div>
    );
}
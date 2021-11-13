import styles from "./ProductImage.module.scss";

export default function ProductImage({ url = [] }) {
    return (
        <div className={styles.producImage}>
            <img className={styles.image} src={url} />
        </div>
    );
}
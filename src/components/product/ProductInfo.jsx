import styles from "./ProductInfo.module.scss";
import { Grid , Stack  } from "@mui/material";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";


export default function ProductInfo({ title = " " , creator = { } , price = 0 , currency = " " , likes = 0 , onTimeEnd , timeEnd , isLive = false }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles["product-info"]}>
                <div className={styles.title}>
                    <ProductInfoTitle text={title} />
                </div>
                <div className={styles.stats}>
                    <ProductInfoPrice amount={price} currency={currency} />
                    <div className={styles.likes}>
                        {isLive && <ProductInfoStatus />}
                        <ProductInfoLikes amount={likes} />
                    </div>
                </div>
                <div className={styles.creator}>
                    <ProductInfoCreator {...creator} />
                    <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
                </div>
            </div>
        </div>
    );
}
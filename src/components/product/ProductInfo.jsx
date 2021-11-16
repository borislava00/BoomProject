import styles from "./ProductInfo.module.scss";
import { Grid , Stack  } from "@mui/material";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";


export default function ProductInfo({ title = " " , creator = " " , price = 0 , currency = " " , likes = 0 , onTimeEnd , timeEnd = Date , isLive = false }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles["product-info"]}>
                <Stack className={styles.stats} spacing={3}>
                    <ProductInfoTitle text={title} />
                    <ProductInfoPrice amount={price} currency={currency} />
                    {isLive && <ProductInfoStatus />}
                    <ProductInfoLikes amount={likes} />
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={5}>
                        <ProductInfoCreator {...creator} />
                    </Grid>
                    <Grid item xs={7} md={5}>
                        <ProductInfoTimer timeEnd={onTimeEnd} onTimeEnd={onTimeEnd} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
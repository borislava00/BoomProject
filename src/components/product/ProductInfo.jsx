import styles from "./ProductInfo.module.scss";
import { Grid , Stack  } from "@mui/material";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";


export default function ProductInfo({ title = " " , creator = { } , price = 0 , currency = " " , likes = 0 , onTimeEnd , timeEnd = Date , isLive = false }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles["product-info"]}>
                <ProductInfoTitle text={title} />
                <Stack className={styles.stats} spacing={3}>
                    <ProductInfoPrice amount={price} currency={currency} />
                    {isLive && <ProductInfoStatus />}
                    <ProductInfoLikes amount={likes} />
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs={5} md={6}>
                        <ProductInfoCreator {...creator} />
                    </Grid>
                    <Grid item xs={7} md={5}>
                        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
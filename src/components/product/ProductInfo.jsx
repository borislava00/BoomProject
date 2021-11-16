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
                <ProductInfoTitle text={title} />
                <Stack spacing={3}>
                    <ProductInfoPrice amount={price} currency={currency} />
                    {isLive && <ProductInfoStatus />}
                    <ProductInfoLikes amount={likes} />
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <ProductInfoCreator name={'toadnft'} avatar={'https://s3-alpha-sig.figma.com/img/e8c9/9cd5/9b8596b5f1e73a55d94965e77c2e61cd?Expires=1637539200&Signature=O6ml7MEWv1NtU7Qu498ujyPukHYNd9RRyLSPgz4V0mmHlWAxymkqG2utJp0PW~FaEe0yGbeaj37cz9FuRAUHHzPNzPvV8Ym8IK2v19N-zhAabC5qtEQ6lAsH6QBmdKbPQJLwN9QaJIpquUtWfwZ10Lvlf3XNUUrcmDbK41lfFwe~pQKrelvaM2Fft3FYNP-PJP7P8CUzIoOqmkV9Dk7XUFcMoLN~ZjorzSzh-M-LengvgbNkuzSwEwVH4iZICx4rAu83mCRnOeNGPvZyq5rC6O19m5FxLxdZg-qMhlvz9xVMTIsa4FMYCpMaJmpIE5rIvCl5YnL1QNcEmPcIOAO2-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <ProductInfoTimer timeEnd={onTimeEnd} onTimeEnd={onTimeEnd} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
import styles from "./ProductContainer.module.scss";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import { Grid } from "@mui/material";

export default function ProductContainer({ name , price , media ,  owner , currency , likes , auction_end , details , bids , source }) {
    return (
        <div className={styles["product-container"]}>
            <div className={styles.media}>
                <ProductImage url={media} />
            </div>
            <div className={styles.content}>
                <ProductInfo isLive={true} title={name} creator={owner} price={price} currency={currency} likes={likes} timeEnd={auction_end} onTimeEnd />
                <ProductTabs text={details} bids={bids} />
                <ProductActions isLive={true} currency={currency} buyAmount={price} bidAmount={price} onBid onBuy />
            </div>
        </div>
    );
}

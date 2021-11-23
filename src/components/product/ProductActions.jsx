import styles from "./ProductActions.module.scss"
import { Button , Grid } from "@mui/material";

const hanlderOnBuy = () => {

}

const hanlderOnBid = () => {

}

export default function ProductActions({ isLive = false , currency = " " , buyAmount = 0 , bidAmount = 0 , onBuy = hanlderOnBuy , onBid = hanlderOnBid }) {
    return(
        <div className={styles["product-action"]}>
            <Grid container spacing={5}>
                <Grid item xs={7} md={5}>
                    <Button disabled={!isLive} className={styles.button} variant="contained" onClick={ onBuy }>Buy for {buyAmount} {currency}</Button>
                    <Button disabled={!isLive} className={styles.button , styles.bidButton} variant="outlined" color="success" onClick={ onBid }>Place a bid for {bidAmount} {currency}</Button>
                </Grid>
            </Grid>
        </div>
    );
}
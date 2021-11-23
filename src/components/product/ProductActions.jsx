import styles from "./ProductActions.module.scss"
import { Button , Grid } from "@mui/material";

export default function ProductActions({ isLive = false , currency = " " , buyAmount = 0 , bidAmount = 0 , onBuy , onBid }) {
    return(
        <div className={styles["product-actions"]}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Button disabled={!isLive} className={styles.button} variant="contained" onClick={onBuy}>Buy for {buyAmount} {currency}</Button>
                    <Button disabled={!isLive} className={styles.button , styles.bidButton} variant="outlined" color="success" onClick={onBid}>Place a bid for {bidAmount} {currency}</Button>
                </Grid>
            </Grid>
        </div>
    );
}
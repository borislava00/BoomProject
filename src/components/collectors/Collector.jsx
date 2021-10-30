import styles from "./Collector.module.scss"
import User from "../user/User";
import { Grid } from "@mui/material";

export default function Collector({ items = [] , type }) {
    return(
        <div className={styles.wrapper} >
            <Grid container className={styles.column} direction="row">
                <Grid item className={styles.id}>
                    <div className={styles.number}>{items.id}</div>
                </Grid>
                <Grid item className={styles.user}>
                    <User name={items.name} info={items.nftCounts} avatar={items.avatar} verified={items.verified} />
                </Grid>
            </Grid>
        </div>
    );
}
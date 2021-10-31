import styles from "./Collector.module.scss"
import User from "../user/User";
import { Grid } from "@mui/material";

export default function Collector({ items = [] , type = "" }) {
    const setBrightness = () => {
        if(type == 'light') {
            return 'brightness(130%)';
        }
    }

    return(
        <div className={styles.conainer} style={{ filter: setBrightness() }} >
            <Grid container className={styles.column} direction="row">
                <Grid item className={styles.id} styles={{ }}>
                    <div className={styles.number}>{items.id}</div>
                </Grid>
                <Grid item className={styles.user}>
                    <User name={items.name} info={items.nftCounts} avatar={items.avatar} verified={items.verified} />
                </Grid>
            </Grid>
        </div>
    );
}
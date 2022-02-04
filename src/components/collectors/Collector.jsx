import styles from "./Collector.module.scss"
import User from "../user/User";
import { Grid } from "@mui/material";

export default function Collector({ items = [] , type = "" }) {
    const setOpacity = () => {
        if(type == 'light') {
            return 'rgba(78,36,242, 0.2)';
        }
    }

    return(
        <div className={styles.conainer} style={{ backgroundColor : setOpacity() }} >
            <Grid container className={styles.column} direction="row">
                <Grid item className={styles.id}>
                    <div className={styles.number}>{items.place}</div>
                </Grid>
                <Grid item className={styles.user}>
                    <User name={items.name} info={items.nftCounts} size={53} avatar={items.avatar} verified={items.verified} />
                </Grid>
            </Grid>
        </div>
    );
}
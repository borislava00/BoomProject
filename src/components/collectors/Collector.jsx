import styles from "./Collector.module.scss"
import stylesColumn from "./CollectorColumn.module.scss"
import User from "../user/User";
import { Grid } from "@mui/material";

function CollectorColumn({ items = [] }) {
    return(
        <div className={stylesColumn.wrapper}>
            <Grid container className={stylesColumn.column} direction="row">
                <Grid item className={stylesColumn.id}>
                    <div className={stylesColumn.number}>{items.id}</div>
                </Grid>
                <Grid item className={stylesColumn.user}>
                    <User name={items.name} info={items.nftCounts} avatar={items.avatar} verified={items.verified} />
                </Grid>
            </Grid>
        </div>
    );
}

export default function Collector({ props = [] , type }) {
    return(
        <div className={styles.container}>
            {props.map( (item , index ) => <CollectorColumn key={index} items={item}/>)}
        </div>
    );
}
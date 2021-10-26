import { Grid } from "@mui/material";
import styles from './Step.module.scss';


function Step({ number = 0 , title = "" , description = "" }) {
    return (
        <div className={styles.wrapper}>
            <Grid container direction='row' className={styles.container}>
                <Grid item className={styles.numberWrapper}>
                    <div className={styles.number}>{number}</div>
                </Grid>
                <Grid item className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Step;
import Grid from "@mui/material/Grid"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from "./Card.module.scss"; 

function LiveCard({ mediaUrl = "" , timeLeft = 0 }) {
    return (
        <Grid container className={styles.badge}>
            <Grid item className={styles.liveIcon}>
                <FiberManualRecordIcon/>
            </Grid>
            <Grid item className={styles.wrapperLive}>
                <div className={styles.live}>live</div>
            </Grid>
        </Grid>
    );
}

export default LiveCard;
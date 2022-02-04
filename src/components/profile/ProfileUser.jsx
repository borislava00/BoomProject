import Avatar from "../avatar/Avatar";
import { Typography } from "@mui/material";
import styles from "./ProfileUser.module.scss";

export default function ProfileUser({ name , info , avatar , verified }) {
    return(
        <div className={styles['profile-user']}>
            <div className={styles.content}>
                <Avatar url={avatar} size={150} />
            </div>
            <div className={styles.content}>
                <Typography variant="h2">{name}</Typography>
            </div>
            <div className={styles.content}>
                <Typography variant="body3">{info}</Typography>
            </div> 
        </div>
    );
}
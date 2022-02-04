import Avatar from "../avatar/Avatar";
import { Typography } from "@mui/material";

import styles from "./ProfileUser.module.scss";

export default function ProfileUser({ name , info , avatar , verified }) {
    return(
        <div className={styles['profile-user']}>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body1">{info}</Typography>
            <Avatar url={avatar} verified={verified} />
        </div>
    );
}
import classNames from "classnames";
import styles from "./User.module.scss"; 
import Avatar from '../avatar/Avatar';
import Box from "@mui/material/Box"

function User({ name = '' , info = '' , avatar = '' , size = 55 , verified = false }) {
    return (
        <div className={classNames(styles.user)}>
            <Avatar url={avatar} verified={verified} />
            <Box className={classNames(styles.wrapper)}>
                <div className={classNames(styles.name)}>{name}</div>
                <div className={classNames(styles.info)}>{info}</div>
            </Box>
        </div>
    );
}

export default User;
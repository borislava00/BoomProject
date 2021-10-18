import classNames from "classnames";
import styles from "./Avatar.module.scss";   
import Container from "@mui/material/Container"

function Avatar({ size = 90 , url , verified = false }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} sx={{ width: size , height : size}}>
                <img className={classNames(styles.image)} src={url} /> 
                {verified ? <img className={classNames(styles.badge)} src={'/images/verified.svg'} /> : null}
            </Container>
        </div>
    );
}

export default Avatar;
import { Badge , Container } from '@mui/material';
import classNames from "classnames";
import styles from "./Avatar.module.scss";   

function AvatarComponent({ size = '90px' , url , verified = false }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} sx={{ width: size , heigth : size}}>
                <img className={classNames(styles.image)} src={url} />
                {verified ? <img className={classNames(styles.badge)} src={'/images/verified.svg'} /> : null}
            </Container>
        </div>
    );
}

export default AvatarComponent;
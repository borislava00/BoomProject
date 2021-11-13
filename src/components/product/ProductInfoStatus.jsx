import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function ProductInfoStatus() {
    return (
        <div className={styles.wrapper}>
            <div className={styles['product-info-status']}>
                <Chip className={styles.status} xs={{ borderRadius: '10px' , fontSize: '1rem'}}
                    icon={<FiberManualRecordIcon />}
                    label='LIVE'
                    color='success'
                />
            </div>
        </div>
    );
}
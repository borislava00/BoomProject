import styles from "./ProductInfoLikes.module.scss";
import { Chip } from "@mui/material";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from "react";

export default function ProductInfoLikes({ amount = 0 }) {

    const [color, setColor] = useState('outlined');
    
    useEffect(() => {
        if(localStorage.getItem('liked') === 'true' ) {
            setColor('filled');
        }
    }, []);
   
    const handleLikeButton = () => {
        if(color == 'filled') {
            setColor('outlined');
            localStorage.setItem('liked', false);
        } else {
            setColor('filled');
            localStorage.setItem('liked', true);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles['product-info-likes']}>
                <Chip className={styles.likes}
                    icon={<FavoriteIcon />}
                    label={ millify(amount) }
                    onClick={handleLikeButton}
                    variant={color}
                    color='success'
                />
            </div>
        </div>
    );
}
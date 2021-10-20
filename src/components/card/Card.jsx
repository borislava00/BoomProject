import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from "@mui/material/Box"
import classNames from "classnames";
import styles from "./Card.module.scss"; 
import Avatar from "../avatar/Avatar"
import millify from "millify";
import { useState, useEffect } from "react";

function Card( { name=[] , likes=0 , mediaUrl='' , price='' , currency='' , verified , avatarUrl='' } ) {

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
        <MuiCard className={classNames(styles.card)}>
            <CardHeader
                avatar={
                    <Avatar url={avatarUrl} verified={verified} />
                }
            />    
            <CardMedia className={classNames(styles.media)}
                component="img"
                image={mediaUrl}
            />
            <CardContent className={classNames(styles.content)}>
                <Box>
                    <div className={classNames(styles.title)}>{ name }</div>
                    <div className={classNames(styles.price)}>{ price + ' ' + currency }</div>
                </Box>
                <Stack className={classNames(styles.likes)} direction="row" spacing={1}>
                    <Chip 
                        icon={<FavoriteIcon />}
                        label={ millify(likes) }
                        onClick={handleLikeButton}
                        variant={color}
                        color='success'
                        />
                    </Stack>
                </CardContent>
        </MuiCard>
    );
}

export default Card;
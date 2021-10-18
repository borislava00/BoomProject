import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from "@mui/material/Box"
import classNames from "classnames";
import styles from "./Card.module.scss"; 
import User from "../user/User"
import millify from "millify";
import { useState, useEffect } from "react";

function CardComponent( props ) {

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
        <Card className={classNames(styles.card)}>
            <CardHeader
                 avatar={
                    <User name='terika77' info='134 items' avatar={props.user.avatarUrl} verified={true} />
                }
            />    
             <CardMedia className={classNames(styles.media)}
                component="img"
                image={props.mediaUrl}
            />
            <CardContent className={classNames(styles.content)}>
                <Box>
                    <div className={classNames(styles.title)}>{ props.name }</div>
                    <div className={classNames(styles.price)}>{ props.price + ' ' + props.currency }</div>
                </Box>
                <Stack className={classNames(styles.likes)} direction="row" spacing={1}>
                    <Chip 
                        icon={<FavoriteIcon />}
                        label={ millify(props.likes) }
                        onClick={handleLikeButton}
                        variant={color}
                        color='success'
                    />
                </Stack>
            </CardContent>
        </Card>
    );
}

export default CardComponent;
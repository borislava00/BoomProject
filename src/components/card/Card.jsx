import MuiCard from '@mui/material/Card';
import Grid from "@mui/material/Grid"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from "@mui/material/Box"
import styles from "./Card.module.scss"; 
import Avatar from "../avatar/Avatar"
import millify from "millify";
import Countdown from 'react-countdown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState, useEffect } from "react";

function Card({ name = "" , likes = 0 , user = {} , mediaUrl = "" , price = 0 , currency = "" , timeLeft = 0 }) {

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
        <MuiCard className={styles.card}>
            <CardHeader
                avatar={
                    <Avatar url={user.avatarUrl} verified={user.verified} />
                }
            />    
            {timeLeft ? <LiveCard timeLeft={timeLeft} /> : null}
            <CardMedia className={styles.media}
                component="img"
                image={mediaUrl}
            />
            <CardContent className={styles.content}>
                <Box>
                    <div className={styles.title}>{ name }</div>
                    <div className={styles.price}>{price + " " + currency}</div>
                </Box>
                <Stack direction="row" spacing={1}>
                    <Chip className={styles.likes}
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

function LiveCard({ timeLeft = 0 }) {
    return (
        <div className={styles.liveCardWrapper}>
            <Grid container className={styles.grid}>
                <Grid item className={styles.badge}>
                    <FiberManualRecordIcon style={{color: 'black'}}/>
                    <div className={styles.live}>LIVE</div>
                </Grid>
                <Grid item className={styles.counter}>
                    <Countdown className={styles.counterContent} date={Date.now() + timeLeft * 100000} />,
                </Grid>
            </Grid>
        </div>
    );
}

export default Card;
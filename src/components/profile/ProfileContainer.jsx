import styles from "./ProfileContainer.module.scss";
import ProfileUser from "./ProfileUser";
import { Typography } from "@mui/material";
import Card from "../card/Card";
import { useState , useEffect } from "react";
import _ from "lodash";

export default function ProfileContainer( profile ) {

    const [ cards , setCards ] = useState([]);
    useEffect( () => {
        setCards(profile.nfts);
    });

    return (
        <div className={styles["profile-container"]}>
            <div className={styles.avatar}>
                <ProfileUser {...profile} />
            </div>
            <div className={styles.title}>
                <Typography variant='h1'>Collection</Typography>
            </div>
            <div className={styles.cards}>
                {_.chunk(cards,4).map( ( chunkCards ) => 
                    <div className={styles['cards-row']}>
                        {chunkCards.map( (card , index) =>
                            <div className={styles.card}>
                                <Card key={index} {...card}/>
                            </div>
                        )} 
                    </div>
                )}
            </div>
        </div>
    );
}
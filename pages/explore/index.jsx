import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import { Container , Typography } from "@mui/material";
import styles from "./Explore.module.scss";
import Card from "../../src/components/card/Card";
import dataCards from "../../data/explore.json"
import { useState , useEffect } from "react";
import _ from "lodash";

export default function Explore(){

    const [ cards , setCards ] = useState([]);
    useEffect( () => {
        setCards(dataCards.explore);
    });

    return(
        <div>
            <Header />
            <Container className={styles.wrapper}>
                <div className={styles.title}>
                    <Typography variant='h1'>Explore</Typography>
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
            </Container>
            <Footer />
        </div>
    );
}
import Header from "../../src/components/header/Header";    
import { Container , Typography } from "@mui/material";
import Footer from "../../src/components/footer/Footer";
import { HOW_IT_WORKS1 , HOW_IT_WORKS2 } from "../../data/descriptions";
import styles from "./How.module.scss";

export default function How(){
    return(
        <div className={styles.wrapper}>
            <Header />
            <Container className={styles.background}>
                <div className={styles.title}>
                    <Typography variant='h1' >HOW IT WORKS</Typography>
                </div>
            </Container>
            <Container className={styles['container-text']}>
                <div>
                    <Typography className={styles.text} >{HOW_IT_WORKS1}</Typography>
                </div>
                <div>
                    <Typography className={styles.text}>{HOW_IT_WORKS2}</Typography>
                </div>
                <div className={styles['clear-box']}></div>
            </Container>
            <Footer />
        </div>
    );
}
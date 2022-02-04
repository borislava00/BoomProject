import Header from "../../src/components/header/Header";
import { Container , Typography } from "@mui/material";
import Footer from "../../src/components/footer/Footer";
import styles from "./Activity.module.scss";

export default function Activity(){
    return(
        <div className={styles.wrapper}>
            <Header />
                <Container className={styles.background}>
                    <div className={styles.title}>
                        <Typography variant='h1' >ACTIVITY</Typography>
                    </div>
                </Container>
                <Container className={styles['container-text']}>
                    <div className={styles['clear-box']}></div>
                </Container>
            <Footer />
        </div>
    );
}
import Container from "@mui/material/Container";    
import Logo from "../logo/Logo";
import Grid from '@mui/material/Grid';
import styles from "./Footer.module.scss";
import Button from "@mui/material/Button";

function Footer() {
    return(
        <div className={styles.wrapper}>
            <Container className={styles.container} >
                <Grid container className={styles.logoWrapper} direction='row' columnSpacing={20}>
                    <Grid item sx={{  display: 'contents' , justifyContent: 'flex-start'}}>
                        <Logo type='muted'/>
                    </Grid>
                    <Grid item className={styles.text}>
                        <p>Bum All Right Reserved 2021</p>
                    </Grid>
                    <Grid item xs sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button sx={{ color: 'white' , borderRadius: 10 }}>Privacy Policy</Button>
                        <Button sx={{ color: 'white' , borderRadius: 10 }} >Cookie Policy</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;
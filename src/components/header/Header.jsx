import Container from "@mui/material/Container";    
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/searchBar";
import Grid from '@mui/material/Grid';
import styles from "./Header.module.scss";
import Link from "../link/Link.jsx";
import Button from "@mui/material/Button";

function Header() {
    return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="xl">
            <Grid container direction='row' columnSpacing={20} sx={{ justifycontent: 'center' , display: 'contents' }}>
                <Grid item sx={{  display: 'contents' , justifyContent: 'flex-start'}}>
                    <Logo />
                </Grid>
                <Grid item className={styles.searchBar}>
                    <SearchBar />
                </Grid>
                <Grid item xs sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button component={Link} sx={{ borderRadius: 10 , color: 'white' }} noLinkStyle href="/">Home</Button>
                    <Button sx={{ color: 'white' , borderRadius: 10 }}>Activity</Button>
                    <Button variant='contained' sx={{ borderRadius: 10 , bgcolor: '#4e24f2'}} >Explore</Button>
                </Grid>
            </Grid>
      </Container>
    </div>
    );
}

export default Header;
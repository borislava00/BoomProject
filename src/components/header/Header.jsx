import Container from "@mui/material/Container";
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/searchBar";
import Grid from '@mui/material/Grid';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Link from "../link/Link.jsx";
import Button from "@mui/material/Button";

function Header() {
    return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
            <Logo />
            <SearchBar />
            <Grid container sx={{ justifycontent: 'flex-end' , display: 'contents'}}>
                <Grid item>
                    <Button component={Link} sx={{ borderRadius: 10 , color: 'white' }} noLinkStyle href="/">Home</Button>
                </Grid>
                    <Button sx={{ color: 'white' , borderRadius: 10 }}>Activity</Button>
                    <Button variant="contained" sx={{ borderRadius: 10 , bgcolor: '#4e24f2'}} >Explore</Button>
            </Grid>
      </Container>
    </div>
    );
}

export default Header;
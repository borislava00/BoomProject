import Container from "@mui/material/Container";
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/searchBar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
            <Grid item>
                <Button component={Link} sx={{ borderRadius: 10 , color: 'white' }} noLinkStyle href="/">Home</Button>
            </Grid>
            <Grid item>
                <Button sx={{ color: 'white' , borderRadius: 10 }}>Activity</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" sx={{ borderRadius: 10 , bgcolor: '#4e24f2'}} >Explore</Button>
            </Grid>
      </Container>
    </div>
    );
}

export default Header;
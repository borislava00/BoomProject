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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Header() {
    return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
            <Logo />
            <SearchBar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                    <Button component={Link} sx={{ color: 'white' }} noLinkStyle href="/">
                        Home
                    </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button sx={{ color: 'white' }}>Activity</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" sx={{ borderRadius: 10 , bgcolor: '#4e24f2'}} >Explore</Button>
                    </Grid>
                </Grid>
            </Box>
      </Container>
    </div>
    );
}

export default Header;
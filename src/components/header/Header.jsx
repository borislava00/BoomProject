import Container from "@mui/material/Container";
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/searchBar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "./Header.module.scss";
import classNames from "classnames";

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
                    <Grid item xs>
                    <Item>xs</Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item>xs=6</Item>
                    </Grid>
                    <Grid item xs>
                    <Item>xs</Item>
                    </Grid>
                </Grid>
            </Box>
      </Container>
    </div>
    );
}

export default Header;
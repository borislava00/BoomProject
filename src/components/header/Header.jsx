import Container from "@mui/material/Container";    
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/searchBar";
import Grid from '@mui/material/Grid';
import styles from "./Header.module.scss";
import Link from "../link/Link";
import Button from "@mui/material/Button";
import { useEffect , useState } from "react";
import { useRouter } from 'next/router';

export default function Header() {

    const router = useRouter();

    let [location,setLocation] = useState('');
    useEffect(() => {
        setLocation(window.location.pathname);
    },[]);

    return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="xl">
            <Grid container direction='row' columnSpacing={20} sx={{ justifycontent: 'center' , display: 'contents' }}>
                <Grid item sx={{  display: 'contents' , justifyContent: 'flex-start' , cursor: 'pointer' }} onClick={() => {
                    router.push({
                    pathname: '/'
                    })
                }}>
                    <Logo />
                </Grid>
                <Grid item className={styles.searchBar}>
                    <SearchBar />
                </Grid>
                <Grid item xs sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{ color: 'white' , borderRadius: 10 , bgcolor: location == "/" ? '#4e24f2' : null }} component={Link} noLinkStyle href="/" >Home</Button>
                    <Button sx={{ color: 'white' , borderRadius: 10 , bgcolor: location == "/activity" ? '#4e24f2' : null }} component={Link} noLinkStyle href="/activity" >Activity</Button>
                    <Button sx={{ color: 'white' , borderRadius: 10 , bgcolor: location == "/explore" ? '#4e24f2' : null }} component={Link} noLinkStyle href="/explore">Explore</Button>
                </Grid>
            </Grid>
      </Container>
    </div>
    );
}

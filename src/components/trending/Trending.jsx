import { Box , Container , Grid , Select , MenuItem , FormControl } from "@mui/material"
import Card from "../card/Card";
import { useState } from "react";
import styles from './Trending.module.scss';

function Trending({ cards = [] }) {
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} maxWidth="xl">
                <Box className={styles.heading} >
                    <div className={styles.title} >Trending</div>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Select className={styles.select}
                        value={time}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">This week</MenuItem>
                            <MenuItem value={10}>Today</MenuItem>
                            <MenuItem value={20}>This month</MenuItem>
                            <MenuItem value={30}>This year</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Grid container spacing={1} sx={{ display: 'flex' , flexDirection : 'row' , justifyContent: 'space-between'}}>
                    <Grid item xs={2}>
                        <Card key={0} {...cards[0]} />
                    </Grid>
                    <Grid item xs={2}>
                        <Card key={1} {...cards[1]} />
                    </Grid>
                    <Grid item xs={2}>
                        <Card key={2} {...cards[2]} />
                    </Grid>
                    <Grid item xs={2}>
                        <Card key={3} {...cards[3]} />
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    );
}

export default Trending;
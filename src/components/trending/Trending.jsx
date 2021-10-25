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
                <Grid container>
                    <Grid item className={styles.heading}  sx={{ display: 'flex' , justifycontent: 'space-between' }}>
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
                    </Grid>
                    <Grid item xl sx={{ display: 'flex' , justifyContent: 'space-between'}}>
                        <Card key={0} {...cards[0]} />
                        <Card key={1} {...cards[1]} />
                        <Card key={2} {...cards[2]} />
                        <Card key={3} {...cards[3]} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Trending;
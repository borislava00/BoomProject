import { Container , Grid , Select , MenuItem } from "@mui/material"
import Card from "../card/Card";
import { useState } from "react";
import styles from './Trending.module.scss';

export default function Trending({ cards = [] }) {
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} maxWidth="xl">
                <Grid container className={styles.gridContainer}>
                    <Grid item className={styles.titleWrapper}>
                        <div className={styles.title} >Trending</div>
                    </Grid>
                    <Grid item className={styles.selectWrapper}>
                        <Select className={styles.select}
                        style={{ width : '250px' }}
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
                    </Grid>
                    <Grid item className={styles.cards} xl>
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

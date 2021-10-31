import styles from "./TopCollectors.module.scss"
import { useState } from "react";
import CollectorColumn from "./CollectorColumn";
import { Container , Grid , Select , MenuItem } from "@mui/material";
import { chunk } from "lodash";

export default function TopCollectors({ collectors = [] }) {
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} maxWidth="xl">
                <Grid container className={styles.gridContainer}>
                    <Grid item className={styles.titleWrapper}>
                        <div className={styles.title}>Top Collectors</div>
                    </Grid>
                    <Grid item className={styles.selectWrapper}>
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
                    </Grid>
                    <Grid item className={styles.collectors} xl>
                    {chunk(collectors,3).map( ( collector, index ) => 
                    <CollectorColumn items={collector}  />
                    )}

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
import { FormControl , Select , InputLabel , MenuItem , Stack , TextField , InputAdornment , Search } from "@mui/material";

import styles from "./ProfileCollectionFIlters.module.scss";

export default function ProfileCollectionFIlters({ filters }) {
    return(
        <div className={styles['profile-collectiion-filters']}>
            <FormControl>
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
                <InputLabel htmlFor="my-input">Email address</InputLabel>
            </FormControl>
        </div>

    );
}
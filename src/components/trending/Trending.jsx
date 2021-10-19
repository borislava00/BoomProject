import CardComponent from "../card/Card";
import Box from "@mui/material/Box"
import classNames from "classnames";
import styles from "./Trending.module.scss"; 
import Container from "@mui/material/Container";
import Select from "@mui/material/Select"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { cards } from "../../dataBase/cards";
import { useState } from "react";

function Trending() {
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
  };
    return (
        <Box className={classNames(styles.wrapper)}>
            <Box className={classNames(styles.heading)}>
                <div className={classNames(styles.title)}>Trending</div>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <Select
                    value={time}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>This week</em>
                    </MenuItem>
                    <MenuItem value={10}>Today</MenuItem>
                    <MenuItem value={20}>This month</MenuItem>
                    <MenuItem value={30}>This year</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Container sx={{ display: 'flex' , flexDirection : 'row' , justifyContent: 'space-between'}} xs={6} maxWidth="xxl">
            {cards.map((card) => <CardComponent {...card} /> )}
            </Container>
        </Box>
    );
}

export default Trending;
import { Grid , Button } from "@mui/material";
import Step from "../step/Step";
import styles from './How.module.scss';


function How({ description = "" , title = "" , items = [] , link = "" }) {
    return (
        <div className={styles.wrapper}>
            <Grid container className={styles.container}>
                <Grid item className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <Button className={styles.button} href={link}>LEARN MORE</Button>
                </Grid>
                <HowStep items={items} />
            </Grid>
        </div>
    );
}

function HowStep({ items = [] }) {
    return(
        <Grid item className={styles.items}>
            {items.map(( item , index ) =>
                <Step key={index} number={item.number} title={item.title} description={item.description} />
            )}
        </Grid> 
    );
}

export default How;
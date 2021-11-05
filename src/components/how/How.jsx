import { Grid , Button } from "@mui/material";
import Step from "../step/Step";
import styles from './How.module.scss';


export default function How({ description = "" , title = "" , items = [] , link = "" }) {
    console.log(description);
    return (
        <div className={styles.wrapper}>
            <Grid container className={styles.container}>
                <Grid item className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                    <Button className={styles.button} href={link}>LEARN MORE</Button>
                </Grid>
                <Grid item className={styles.items}>
                    {items.map( (item , index ) => <HowStep key={index} item={item} />)}
                </Grid>
            </Grid>
        </div>
    );
}

function HowStep({ item = [] }) {
    return(
        <Grid item className={styles.item}>
            <Step number={item.number} title={item.title} description={item.description} />
        </Grid> 
    );
}

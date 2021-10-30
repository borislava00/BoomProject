import styles from "./Collector.module.scss"
import CollectorColumn from "./CollectorColumn";

export default function Collector({ props = [] , type = false }) {
    return(
        <div className={styles.container}>
            {props.map( (item , index ) => type ? <CollectorColumn className={styles.light} key={index} items={item}/> :
            <CollectorColumn key={index} items={item}/> )}
        </div>
    );
}
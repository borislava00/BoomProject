import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector";

export default function CollectorColumn({ props = [] }) {

    return(
        <div className={styles.container}>
            {props.map( (item , index ) => <Collector key={index} items={item} type={ index % 2 == 0 }/> )}
        </div>
    );
}
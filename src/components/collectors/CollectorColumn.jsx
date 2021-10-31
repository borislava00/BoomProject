import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector";

export default function CollectorColumn({ items = [] , index }) {
    return(
        <div className={styles.container}>
            {items.map( (item  ) => <Collector key={index} items={item} type={ index % 2 != 0 ? "light" : "" }/> )}
        </div>
    );
}
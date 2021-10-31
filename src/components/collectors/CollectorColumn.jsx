import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
    return(
        <div className={styles.container}>
            {items.map( (item , index  ) => <Collector key={index} items={item} id={ index + 1 } type={ index % 2 != 0 ? "light" : "" }/> )}
        </div>
    );
}
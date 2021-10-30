import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {

    const isLight = (index) => {
        if (index % 2 != 0) {
            return 'light';
        }
    }

    return(
        <div className={styles.container}>
            {items.map( (item , index ) => <Collector key={index} items={item} type={isLight(index)}/> )}
        </div>
    );
}
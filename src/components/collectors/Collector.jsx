import styles from "./Collector.module.scss"
import CollectorsColumn from "./CollectorColumn";

export default function Collectors({ type = [] }) {
    return(
        <div className={styles.container}>
            {type.map( (item , index ) => <CollectorsColumn key={index} items={item}/>)}
        </div>
    );
}
import styles from "./Collector.module.scss"
import CollectorsColumn from "./CollectorColumn";

export default function Collectors({ props = [] , type }) {
    return(
        <div className={styles.container}>
            {props.map( (item , index ) => <CollectorsColumn key={index} items={item}/>)}
        </div>
    );
}
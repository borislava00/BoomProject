import styles from "./Collectors.module.scss"
import CollectorsColumn from "./CollectorsColumn";

export default function Collectors({ type = [] }) {
    return(
        <div className={styles.container}>
            {type.map( (item , index ) => <CollectorsColumn key={index} items={item}/>)}
        </div>
    );
}
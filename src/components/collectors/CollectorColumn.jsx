import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector";
import { useRouter } from 'next/router';

export default function CollectorColumn({ items = [] }) {

    const router = useRouter();

    return(
        <div className={styles.container} >
            {items.map( (item , index  ) => 
                <div className={styles.collector} onClick={() => {
                    router.push({
                    pathname: '/profile/[id]',
                    query: { id: item.id },
                    })
                }}>
                    <Collector key={index} items={item} type={ index % 2 != 0 ? "light" : "" } />
                </div>
            )} 
        </div>
    );
}
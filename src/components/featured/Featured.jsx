import { ImageList , ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss"; 
  
export default function Featured({ items = [] }) {
    return(
        <div className={styles.wrapper}>
            <ImageList className={styles.list}
                cols={6}
                >
                {items.map((item , index ) => (
                    <ImageListItem className={styles.item} key={index} cols={item.cols || 1} rows={item.rows || 1}>
                        <img className={styles.img}
                            alt={item.title}
                            style={{ height : '250px' }}
                            src={item.img}
                        />
                    </ImageListItem>
                ))} 
            </ImageList>
        </div>
    );
}

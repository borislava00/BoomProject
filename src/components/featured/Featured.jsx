import { Container , ImageList , ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss"; 
import { useRouter } from 'next/router'

export default function Featured({ items = [] }) {
    const router = useRouter();
    return(
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <ImageList className={styles.list}
                    sx={{ width: 800, height: 300 }}
                    cols={6}
                    rowHeight={120}
                    >
                    {items.map((item , index ) => (
                        <ImageListItem className={styles.item} key={index} cols={item.cols || 1} rows={item.rows || 1}>
                            <img className={styles.img}
                                alt={item.title}
                                src={item.img}
                                onClick={() => router.push(item.href)}
                            />
                        </ImageListItem>
                    ))} 
                </ImageList>
            </Container>
        </div>
    );
}

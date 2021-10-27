import { Container , ImageList , ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss"; 
import { useRouter } from 'next/router'

function Featured({ items = [] }) {
    const router = useRouter();
    return(
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                    >
                    {items.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <a href={item.href}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                onClick={() => router.push(item.href)}
                            />
                        </a>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </div>
    );
}

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  

export default Featured;
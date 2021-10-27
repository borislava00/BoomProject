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
                    {/* {items.map((item , index ) => (
                        <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                src={item.img}
                                onClick={() => router.push(item.href)}
                            />
                        </ImageListItem>
                    ))} */}
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500'
                            onClick={() => router.push('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500')} />
                    </ImageListItem>
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
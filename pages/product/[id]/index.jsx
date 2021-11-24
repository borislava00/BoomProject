import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from "../../../data/nfts.json";
import { useState , useEffect } from "react";

export default function ReadMore( dataNfts ) {
    const [ nfts , setNfts ] = useState([]);
    useEffect( () => {
        setNfts(dataNfts);
    });
    const router = useRouter()
  
    return (
        <div>
            <Header />
            <ProductContainer onClick={() => {
                router.push({
                    pathname: '/post/[pid]',
                    query: { pid: post.id },
                })
            }}/>
            <Footer />
        </div>
      
    );
  }
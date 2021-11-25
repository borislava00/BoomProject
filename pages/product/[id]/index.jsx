import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from "../../../data/nfts.json";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";

export default function Index() {
    const router = useRouter();
    const productId = router.query.id;

    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct(dataProduct)
    }, [productId])
  
    return (
        <div className="wrapper">
            <Header/>
            <ProductContainer {...product} owner={product?.owner}/>
            <Footer/>
      </div>
    );
  }
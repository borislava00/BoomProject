import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from "../../../data/nfts.json";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";


export default function Index() {
    
    const router = useRouter();
    const productId = router.query.id;
    
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProducts(dataNfts);
        products.map((currProduct) =>{
            if( currProduct.id == productId ){
    
                setProduct(currProduct);
                return;
            }
        });
    })
    
    return (
        <div className="wrapper">
            <Header/>
            <ProductContainer {...product}/>
            <Footer/>
      </div>
    );
  }
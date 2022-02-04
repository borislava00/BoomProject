import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";


export default function Index() {
    
    const router = useRouter();
    const productId = router.query.id;
    
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        products.map((product) =>{
            if( product.id == productId ){
    
                setProduct(product);
                return;
            }
        });
    }, [productId])
    
    return (
        <div className="wrapper">
            <Header/>
            <ProfileHero {...product}/>
            <Footer/>
      </div>
    );
  }
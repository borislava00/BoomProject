import data from "../../../data/nfts.json";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";

export default function Product() {
    return (
        <div className='wrapper'>
            <Header />
            {data.map((product) => <ProductContainer {...product} />)}
            <Footer />
        </div>
      );
}
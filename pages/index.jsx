import { useState , useEffect } from "react";
import dataNfts from "../data/nfts.json";
import dataFeatured from "../data/featured.json";
import dataHowStep from "../data/how.json";
import dataCollectors from "../data/collectors.json";
import Header from "../src/components/header/Header";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import TopCollectors from "../src/components/collectors/TopCollectors";
import ProductContainer from "../src/components/product/ProductContainer";

export default function Index() {
  const [ featuredCrads , setFeaturedCards ] = useState([]);
  useEffect( () => {
    setFeaturedCards(dataFeatured);
  });

  const [ nfts , setNfts ] = useState([]);
  useEffect( () => {
    setNfts(dataNfts);
  });

  const [ topCollectors , setTopCollectors ] = useState([]);
  useEffect( () => {
    setTopCollectors(dataCollectors);
  });

  const [ howSteps , setHowSteps ] = useState([]);
  useEffect( () => {
    setHowSteps(dataHowStep);
  });

  return (
    <div className='wrapper'>
      <Header />
      <Featured items={featuredCrads.cards} />
      <Trending cards={nfts.cards} />
      <TopCollectors collectors={topCollectors.collectors} />
      <How {...howSteps.how} />
      <Auctions cards={nfts.liveCards} />
      <ProductContainer name={"Ergonomic Concrete Tuna"} owner={{"username":"Justen_King18","verified":true,"avatar":{"url":"https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"}}} price={20} currency={"ETH"} likes={25} auction_end={"2022-09-02T20:43:19.149Z"} details={"asdasdads"} source={{"url":"https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"}} bids={[{"user":{"info":20,"name":"John","verified":true,"avatar":"https://nft-auction.herokuapp.com/uploads/thumbnail_0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg"},"date":"2021-10-22T08:29:23.382Z","amount":20}]} />
      <Footer />
    </div>
  );
}

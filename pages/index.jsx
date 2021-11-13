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
import ProductImage from "../src/components/product/ProductImage";
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../src/components/product/ProductInfoStatus";

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
      <ProductImage url={'https://s3-alpha-sig.figma.com/img/5700/961d/873ed585dda6af33c56c3e41f33c9c2b?Expires=1637539200&Signature=Drw0e4a2DuK5AD8r3gjLMSdfSnIkfaxKXqvZO908LZ6oL-SzEwOjRNpoC6xzgOmiJcECIpWIdrZBygVydLzx2JImqNFfVZexlhG600x1lCGT9LsSNaNZHu4lWIIy1zSrmCB-jD0TLfHX2RpRYQITU7R~dvJJ5ZkKkVpnRJy8IHg3o0GHiDjlYD3ycN-Jv4EIdlaIGVjSo0uPRLxHMSjtG3v~ob4WOpt2Gnt0MRA3WlRuW96RpziBc9xA6jMyR-Kbl0keLwCzyQD~5-Kuu~gJoTYOyOHw30nK-oKecBTbBQ617nvlx4pIV~Hhpwze37Nosj4Qq4UGcWza4YsNAn9brQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} />
      <ProductInfoTitle text={'Shallow Son'} />
      <ProductInfoPrice amount={3} currency={'ETH'} />
      <ProductInfoStatus />
      <Footer />
    </div>
  );
}

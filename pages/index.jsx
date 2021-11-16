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
import ProductInfoLikes from "../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../src/components/product/ProductInfoTimer";
import ProductInfo from "../src/components/product/ProductInfo";
import ProductTabs from "../src/components/product/ProductTabs";

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
      <ProductInfoLikes amount={1100} />
      <ProductInfoCreator name={'toadnft'} avatar={'https://s3-alpha-sig.figma.com/img/e8c9/9cd5/9b8596b5f1e73a55d94965e77c2e61cd?Expires=1637539200&Signature=O6ml7MEWv1NtU7Qu498ujyPukHYNd9RRyLSPgz4V0mmHlWAxymkqG2utJp0PW~FaEe0yGbeaj37cz9FuRAUHHzPNzPvV8Ym8IK2v19N-zhAabC5qtEQ6lAsH6QBmdKbPQJLwN9QaJIpquUtWfwZ10Lvlf3XNUUrcmDbK41lfFwe~pQKrelvaM2Fft3FYNP-PJP7P8CUzIoOqmkV9Dk7XUFcMoLN~ZjorzSzh-M-LengvgbNkuzSwEwVH4iZICx4rAu83mCRnOeNGPvZyq5rC6O19m5FxLxdZg-qMhlvz9xVMTIsa4FMYCpMaJmpIE5rIvCl5YnL1QNcEmPcIOAO2-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} />
      <ProductInfoTimer timeEnd={0.00005} />
      <ProductInfo title={"John"} creator={{"name":"George","avatar":"https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg","verified":true}} price={20} currency={"ETH"} likes={20} timeEnd={"2022-09-02T20:43:19.149Z"} isLive={true} />
      <ProductTabs text={"i m dsnfisdv"} bids={[{"user":{"avatar":"/images/avatar.png","name":"hrisi","verified":true},"amount":30,"date":"2021-10-22T08:29:23.382Z"},{"user":{"avatar":"/images/avatar.png","name":"maxi","verified":true},"amount":1000,"date":"2021-10-22T08:29:23.382Z"}]} />
      <Footer />
    </div>
  );
}

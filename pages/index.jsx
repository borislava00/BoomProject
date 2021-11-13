import { useState , useEffect } from "react";
import dataNfts from "../data/nfts.json";
import dataFeatured from "../data/featured.json";
import dataHowStep from "../data/how.json";
import dataCollectors from "../data/collectors.json";
import Grid from "@mui/material/Grid";
import Header from "../src/components/header/Header";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import TopCollectors from "../src/components/collectors/TopCollectors";

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
      <Footer />
    </div>
  );
}

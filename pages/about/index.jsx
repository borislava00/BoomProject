import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import Trending from "../../src/components/trending/Trending";
import Auctions from "../../src/components/auctions/Auctions"
import Footer from "../../src/components/footer/Footer";
import How from "../../src/components/how/How";
import Featured from "../../src/components/featured/Featured";

export default function About() {

  const cards = [
    {
        name : 'Ivy',
        likes : 1100,
        mediaUrl : 'images/nft.jpg',
        user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
        },
        price : '~1',
        currency : 'ETH',
    },
    {
        name : 'Judie',
        likes : 1100,
        mediaUrl : 'images/nft.jpg',
        user : {
            avatarUrl : 'images/avatar.png',
            verified : true,
        },
        price : '~2.3',
        currency : 'ETH',
    },
    {
        name : 'Juniper',
        likes : 1100,
        mediaUrl : 'images/nft.jpg',
        user : {
            avatarUrl : 'images/avatar.png',
            verified : true,
        },
        price : '5',
        currency : 'ETH',
    },
    {
        name : 'Maple',
        likes : 1100,
        mediaUrl : 'images/nft.jpg',
        user : {
            avatarUrl : 'images/avatar.png',
            verified : true,
        },
        price : '10',
        currency : 'ETH',
    }
]

const liveCards = [
  {
      name : 'Ivy',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
        avatarUrl : 'images/avatar.png',
        verified : true,
      },
      price : '~1',
      currency : 'ETH',
      timeLeft : 50,
  },
  {
      name : 'Judie',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
      },
      price : '~2.3',
      currency : 'ETH',
      timeLeft : 30,
  },
  {
      name : 'Juniper',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
      },
      price : '5',
      currency : 'ETH',
      timeLeft : 60,
  },
  {
      name : 'Maple',
      likes : 1100,
      mediaUrl : 'images/nft.jpg',
      user : {
          avatarUrl : 'images/avatar.png',
          verified : true,
      },
      price : '10',
      currency : 'ETH',
      timeLeft : 20,
  }
]

const steps = [
  {
    number : 1,
    title : 'DIGITAL CURRENCY',
    description: 'You can get ETH, the digital currency' + 
    ' that fuels transactions on the Ethereum ' + 
    'blockchain, from a digital currency exchange.'
  },
  {
    number : 2,
    title : 'CRYPTO WALLET',
    description: 'A crypto wallet, such as MetaMask, ' + 
    'stores your ETH and processes transactions ' + 
    'on the Ethereum blockchain.'
  },
  {
    number : 3,
    title : 'BUM.',
    description: 'Let\'s connect yout wallet to BUM, edit ' + 
    'your profile, and begin interacting in ' + 
    'tha space.'
  },
]

const how = {
  title : 'HOW IT WORKS',
  description : 'Discover, collect, and sell extraordinary NFT\'s on the world\'s first & ' +
  'largest NFT marketplace. There are three things you\'ll need in place ' +
  'to open your account and start bying or selling NFT\'s on BUM.',
  items : steps,
  link: 'href',
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 3,
    href: "/about"
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    href: "/about"
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    href: "/about"
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    href: "/about"
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    href: "/about"

  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    href: "/about"

  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    href: "/about"
  }
]

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header />
          <Trending cards={cards} />
          <Auctions cards={liveCards} />
          <How title={how.title} description={how.description} items={how.items} link={how.items} />
          <Featured items={itemData} />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
 
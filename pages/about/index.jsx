import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import Trending from "../../src/components/trending/Trending";
import Auctions from "../../src/components/auctions/Auctions"

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

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header/>
          <Trending cards={cards} />
          <Auctions cards={liveCards} />
        </Grid>
      </Grid>
    </Container>
  );
}
 
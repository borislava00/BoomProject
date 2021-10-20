import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import Trending from "../../src/components/trending/Trending";
import Card from "../../src/components/card/Card"

export default function About() {
  const user={
    avatarUrl : 'images/avatar.png',
    verified : true,
  }
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header/>
          <Card name='Clock' likes={1100} mediaUrl='images/nft.jpg' price='~12.2' currency='ETH' user={user}/>
        </Grid>
      </Grid>
    </Container>
  );
}
 
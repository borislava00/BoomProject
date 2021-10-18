import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import CardComponent from "../../src/components/card/Card"
import { cards } from "../../src/dataBase/cards"

const cardProps = {
  name : 'Clock',
  likes : 1100,
  mediaUrl : 'images/nft.jpg',
  user : {
    avatarUrl : 'images/avatar.png',
    verified : true,
  },
  price : '~12.2',
  currency : 'ETH',
};

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header/>
          <Container sx={{ display: 'flex' , flexdirection : 'row'}} xs={6} maxWidth="xxl">
            {cards.map((card) => <CardComponent {...card} /> )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

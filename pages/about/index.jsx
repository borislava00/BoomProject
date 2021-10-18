import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import CardComponent from "../../src/components/card/Card"
import User from "../../src/components/user/User";

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
          <CardComponent {...cardProps} />
        </Grid>
      </Grid>
    </Container>
  );
}

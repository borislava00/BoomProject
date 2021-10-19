import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import Trending from "../../src/components/trending/Trending";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header/>
          <Trending />
        </Grid>
      </Grid>
    </Container>
  );
}

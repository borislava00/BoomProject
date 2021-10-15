import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import AvatarComponent from "../../src/components/avatar/Avatar"

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header />
          <AvatarComponent url={'/images/avatar.png'} />
        </Grid>
      </Grid>
    </Container>
  );
}

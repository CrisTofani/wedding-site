import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid
            item
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="h5" fontWeight={600}>
              Contattaci
            </Typography>
            <Grid
              item
              container
              direction="row"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h6">Cristiano</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">+39 329 8293022</Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              alignItems="flex-start"
              spacing={6}
            >
              <Grid item>
                <Typography variant="h6">Marta</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">+39 329 2251193</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="h5">Cristiano & Marta</Typography>
            <Typography variant="h6">7 Settembre 2024</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

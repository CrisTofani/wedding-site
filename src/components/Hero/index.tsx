import { Grid, Typography } from "@mui/material";
import * as React from "react";
import "./index.css";
export default function Hero() {
  return (
    <section className="hero-section" id="#section-1">
      <Grid
        height={"100%"}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant={"h2"}
            sx={{ color: "#fff", textAlign: "center" }}
          >
            Cristiano & Marta
          </Typography>
          <Typography variant="h5" sx={{ color: "#fff", textAlign: "center" }}>
            Ci sposeremo il
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ color: "#fff", textAlign: "center" }}
          >
            7 Settembre 2024
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

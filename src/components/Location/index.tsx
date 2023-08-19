import { Divider, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function Location() {
  return (
    <section style={{ padding: "50px 24px" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        L'evento
      </Typography>
      <Typography
        variant="h5"
        fontStyle="italic"
        fontWeight={200}
        sx={{ textAlign: "center" }}
      >
        Qui si svolgerà il matrimonio
      </Typography>
      <Grid
        sx={{ padding: "40px 0" }}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.576757077686!2d12.522065476599733!3d41.772782271253504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258c1d9d082793%3A0x7f651fca2a241f1b!2sCasale%20Torre%20Sant&#39;Anastasia!5e0!3m2!1sit!2sit!4v1692478963039!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0, maxWidth: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid item>
          <Typography variant="h5" textAlign={"center"} fontWeight={600}>
            Casale Torre Sant'Anastasia
          </Typography>
          <Typography variant="h5" textAlign={"center"}>
            Via di Torre Sant'Anastasia, 18, 00134, Roma
          </Typography>
          <Typography variant="h5" textAlign={"center"}>
            Zona Castel di Leva
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h5" textAlign={"center"}>
            Dalle 17.30 a l'1.00
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

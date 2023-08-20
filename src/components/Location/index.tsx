import { Divider, Grid, Typography } from "@mui/material";
import * as React from "react";

export default function Location() {
  const width = window.screen.width.toString();

  return (
    <section
      style={{ paddingTop: "50px", backgroundColor: "rgb(241,243,244)" }}
      id="#section-2"
    >
      <Grid container justifyContent={"space-around"}>
        <Grid item sm={4}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "#596D4E" }}
          >
            Il matrimonio
          </Typography>
          <br />
          <Typography variant="h6" textAlign={"center"} fontWeight={600}>
            Casale Torre Sant'Anastasia
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Via di Torre Sant'Anastasia, 18, 00134, Roma
          </Typography>
          <Typography variant="body1" textAlign={"center"}>
            Zona Castel di Leva
          </Typography>
          <Divider sx={{ my: "15px" }} />
          <Typography variant="body2" textAlign={"center"} fontStyle={"italic"}>
            Dalle 17.30 a l'1.00
          </Typography>
          <br />
        </Grid>
      </Grid>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.576757077686!2d12.522065476599733!3d41.772782271253504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258c1d9d082793%3A0x7f651fca2a241f1b!2sCasale%20Torre%20Sant&#39;Anastasia!5e0!3m2!1sit!2sit!4v1692478963039!5m2!1sit!2sit"
        width={width}
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

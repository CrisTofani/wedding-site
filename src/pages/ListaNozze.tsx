import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SA1 from "../img/SudAfrica-1.jpeg";
import SA2 from "../img/SudAfrica-2.webp";
import SE1 from "../img/Seychelles-1.jpeg";
import SE2 from "../img/Seychelles-2.jpeg";

export const ListaNozze = () => {
  const theme = useTheme();

  return (
    <>
      <Header hideMenu />
      <Hero
        title="Viaggio di Nozze"
        subtitle="Aiutaci a realizzare il nostro sogno di girare il mondo"
        note=""
      />
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "rgb(241,243,244)",
        }}
      >
        <Container>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Per il nostro viaggio di nozze abbiamo deciso di andare un po'
            lontano, per vedere natura incontaminata e animali che apprezziamo
            solo nei documentari in TV.
          </Typography>
          <br />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            (Ma non ci faremo mancare anche un po' di relax in spiaggia)
          </Typography>
          <br />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>IBAN:</b> IT50G0200805179000106920127
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>Intestatario:</b> TOFANI CRISTIANO, BANDINO MARTA
          </Typography>
          <br />
          <Grid container spacing={2} direction={"row"}>
            <Grid item xs={12} md={3}>
              <img src={SA1} alt="Sud Africa 1" height="auto" width={"100%"} />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src={SA2} alt="Sud Africa 2" height="auto" width={"100%"} />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src={SE1} alt="Seychelles 1" height="auto" width={"100%"} />
            </Grid>
            <Grid item xs={12} md={3}>
              <img src={SE2} alt="Seychelles 2" height="auto" width={"100%"} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

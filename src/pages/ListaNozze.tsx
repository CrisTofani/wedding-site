import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export const ListaNozze = () => {
  const theme = useTheme();

  return (
    <>
      <Header hideMenu />
      <Hero
        title="Lista di Nozze"
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
        <Container
          disableGutters={useMediaQuery(theme.breakpoints.only("xs"))}
          style={{ height: "100%" }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Per chi volesse contribuire alla realizzazione del nostro sogno di
            viaggio
          </Typography>
        </Container>
      </div>
      <Footer />
    </>
  );
};

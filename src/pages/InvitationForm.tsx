import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/InvitationForm";
import Footer from "../components/Footer";

export const InvitationForm = () => (
  <>
    <Header hideMenu={true} />
    <Hero
      subtitle="Siamo felici di invitarti al nostro matrimonio"
      title="7 Settembre 2024"
      note={
        <>
          <Divider sx={{ my: "15px" }} light color="white" />
          <Typography
            variant="h6"
            textAlign={"center"}
            fontWeight={600}
            color={"white"}
          >
            Casale Torre Sant'Anastasia
          </Typography>
          <Typography variant="body1" textAlign={"center"} color={"white"}>
            Via di Torre Sant'Anastasia, 18, 00134, Roma
          </Typography>
          <Typography variant="body1" textAlign={"center"} color={"white"}>
            Zona Castel di Leva
          </Typography>
          <Typography
            variant="body2"
            textAlign={"center"}
            fontStyle={"italic"}
            color={"white"}
          >
            Dalle 17.30 a l'1.00
          </Typography>
        </>
      }
    />
    <Form />
    <Footer />
  </>
);

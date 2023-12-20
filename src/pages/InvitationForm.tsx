import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/InvitationForm";
import Footer from "../components/Footer";
import { getInvitation } from "../services/api";
import { Invitation } from "../utils/types/guest";
import { LoadingPlaceholder } from "../components/LoadingPlaceholder";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import InvitationNotFount from "../img/InvitationNotFound.png";

const InvitationError = () => {
  const theme = useTheme();
  return (
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
        <Typography
          variant="h3"
          color={theme.palette.primary.main}
          sx={{ textAlign: "center" }}
        >
          Ops, sembra che questo invito non esista!
        </Typography>
        <br />
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Se hai ricevuto questo link da parte nostra, contattaci!
        </Typography>
        <br />
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Se invece stai provando ad accedere ad un invito senza essere stato
          invitato, bel tentativo!
        </Typography>
        <br />
        <div
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <img
            src={InvitationNotFount}
            alt="Invitation not found"
            height="350px"
            width="auto"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
      </Container>
    </div>
  );
};
export const InvitationForm = () => {
  const [loading, setLoading] = React.useState(true);
  const [invitation, setInvitation] = React.useState<Invitation | undefined>(
    undefined
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;
    getInvitation(id)
      .then((invitation) => {
        setLoading(false);
        setInvitation(invitation as Invitation);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  return (
    <>
      <Header hideMenu />
      <Hero
        title="Cristiano & Marta"
        subtitle=""
        note={
          <>
            <Typography
              variant="h3"
              textAlign={"center"}
              // fontWeight={600}
              color={"white"}
            >
              7 Settembre 2024
            </Typography>
            <br />
            <Typography
              variant="h5"
              textAlign={"center"}
              // fontWeight={600}
              color={"white"}
            >
              Siamo felici di invitarti al nostro matrimonio
            </Typography>
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
      {loading ? (
        <LoadingPlaceholder />
      ) : id && invitation ? (
        <Form id={id} invitation={invitation} />
      ) : (
        <InvitationError />
      )}
      <Footer />
    </>
  );
};

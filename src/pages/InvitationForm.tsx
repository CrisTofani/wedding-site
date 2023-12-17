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

export const InvitationForm = () => {
  const [loading, setLoading] = React.useState(true);
  const [invitation, setInvitation] = React.useState<Invitation | undefined>(
    undefined
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;
    getInvitation(id).then((invitation) => {
      setLoading(false);
      setInvitation(invitation as Invitation);
    });
  }, [id]);

  return (
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
      {loading ? (
        <LoadingPlaceholder />
      ) : (
        id && invitation && <Form id={id} invitation={invitation} />
      )}
      <Footer />
    </>
  );
};

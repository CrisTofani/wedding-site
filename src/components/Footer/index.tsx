import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./index.css";

const openUrl = (url: string) => window.open(url, "_blank");

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
              sx={{ mt: 1 }}
              direction="row"
              alignItems="center"
              columnSpacing={3}
            >
              <Grid item>
                <Typography variant="h6">Cristiano</Typography>
              </Grid>
              <Grid item>
                <ButtonGroup variant="text" size="small">
                  <Button
                    color="inherit"
                    onClick={() =>
                      openUrl(
                        "https://wa.me/393298293022?text=Ciao+Cristiano,+ti+contatto+per+informazioni+sul+tuo+matrimonio."
                      )
                    }
                  >
                    <WhatsAppIcon />
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() =>
                      openUrl("https://www.instagram.com/cristianotofani_")
                    }
                  >
                    <InstagramIcon />
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => openUrl("https://www.facebook.com/BigC921/")}
                  >
                    <FacebookIcon />
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              alignItems="center"
              columnSpacing={6}
            >
              <Grid item>
                <Typography variant="h6">Marta</Typography>
              </Grid>
              <Grid item>
                <ButtonGroup variant="text" size="small">
                  <Button
                    color="inherit"
                    onClick={() =>
                      openUrl(
                        "https://wa.me/393292251193?text=Ciao+Marta,+ti+contatto+per+informazioni+sul+tuo+matrimonio."
                      )
                    }
                  >
                    <WhatsAppIcon />
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() =>
                      openUrl("https://www.instagram.com/martabandinophoto")
                    }
                  >
                    <InstagramIcon />
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() =>
                      openUrl("https://www.facebook.com/marta.bandino")
                    }
                  >
                    <FacebookIcon />
                  </Button>
                </ButtonGroup>
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
            <Typography variant="body1">Casale Torre Sant'Anastasia</Typography>
            <Typography variant="body2">
              Via di Torre Sant'Anastasia, 18, 00134, Roma
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

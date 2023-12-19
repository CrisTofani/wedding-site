import { Container, Grid, Typography } from "@mui/material";
import AddToCalendar from "../AddToCalendar";

type MessageProps = {
  messageContent: string;
  confirm?: boolean;
};

export const Message = ({ messageContent, confirm = false }: MessageProps) => {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "rgb(241,243,244)",
      }}
    >
      <Grid
        height={"100%"}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant={"h3"} sx={{ textAlign: "center" }}>
            Grazie per aver risposto al nostro invito!
          </Typography>
          <br />
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {messageContent}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      {confirm && (
        <Container>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-around"}
            spacing={4}
          >
            <Grid item justifyContent={"space-around"}>
              <Grid item>
                <Typography variant="h6" textAlign={"center"} fontWeight={600}>
                  Casale Torre Sant'Anastasia
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                  Via di Torre Sant'Anastasia, 18, 00134, Roma
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                  Zona Castel di Leva
                </Typography>
                <a
                  href="https://maps.app.goo.gl/2fGAL67qi5kok3YQA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="body1" textAlign={"center"}>
                    Vai alla mappa
                  </Typography>
                </a>
              </Grid>
            </Grid>
            <Grid item justifyContent={"space-around"}>
              <Grid item>
                <Typography variant="h6" textAlign={"center"} fontWeight={600}>
                  7 Settembre 2024
                </Typography>
                <Typography
                  variant="body2"
                  textAlign={"center"}
                  fontStyle={"italic"}
                >
                  Dalle 17.30 a l'1.00
                </Typography>
                <br />
                <AddToCalendar />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

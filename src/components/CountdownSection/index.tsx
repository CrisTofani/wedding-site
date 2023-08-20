import * as React from "react";
import { timeLeft } from "../../utils/types/date";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import AddToCalendar from "../AddToCalendar";

export default function CountdownSection() {
  const [time, setTimer] = React.useState(timeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{ padding: "50px 0", backgroundColor: "rgba(89, 109, 78, 0.3)" }}
      id="#section-3"
    >
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ maxWidth: "50vw", mx: "auto" }}
        >
          <Grid item sm={4}>
            <Typography variant="h3" align="center">
              {time.days}
            </Typography>
            <Typography variant="body1" align="center" fontStyle="italic">
              Giorni
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h3" align="center">
              {time.hours}
            </Typography>
            <Typography variant="body1" align="center" fontStyle="italic">
              Ore
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h3" align="center">
              {time.minutes}
            </Typography>
            <Typography variant="body1" align="center" fontStyle="italic">
              Minuti
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: "50px" }}
        >
          <AddToCalendar />
        </Grid>
      </Container>
    </section>
  );
}

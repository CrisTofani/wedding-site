import { Grid, Typography } from "@mui/material";
import "./index.css";

type HeroProps = {
  title?: string;
  subtitle?: string;
  note?: string | React.ReactNode;
};

export default function Hero({
  title = "Cristiano & Marta",
  subtitle = "Ci sposeremo il",
  note = "7 Settembre 2024",
}: HeroProps) {
  return (
    <section className="hero-section" id="#section-1">
      <Grid
        height={"100%"}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant={"h2"}
            sx={{ color: "#fff", textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: "#fff", textAlign: "center" }}>
            {subtitle}
          </Typography>
          {typeof note === "string" ? (
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ color: "#fff", textAlign: "center" }}
            >
              {note}
            </Typography>
          ) : (
            note
          )}
        </Grid>
      </Grid>
    </section>
  );
}

import Header from "../components/Header";
import Hero from "../components/Hero";
import Location from "../components/Location";
import CountdownSection from "../components/CountdownSection";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";

export const Home = () => (
  <>
    <Header />
    <Hero
      subtitle=""
      note={
        <>
          <Typography
            variant={"h3"}
            sx={{ color: "#fff", textAlign: "center" }}
          >
            {"7 Settembre 2024"}
          </Typography>
        </>
      }
    />
    <Location />
    <CountdownSection />
    <Footer />
  </>
);

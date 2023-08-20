import * as React from "react";
import "./App.css";
import "./firebase";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Location from "./components/Location";
import { createTheme, responsiveFontSizes } from "@mui/material";
// import { animated, useInView, useSpring } from "@react-spring/web";
import { ThemeProvider } from "@emotion/react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CountdownSection from "./components/CountdownSection";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "rgba(89, 109, 78)",
      },
    },
  })
);

function App() {
  // const [ref, isInView] = useInView({
  //   amount: buildInteractionObserverThreshold(),
  // });

  // const styles = useSpring({
  //   scale: isInView ? 1.5 : 0,
  //   config: {
  //     tension: 300,
  //   },
  // });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Location />
      <CountdownSection />
      <Footer />
      {/* <animated.img
        src={require("./img/Obi.png")}
        ref={ref}
        style={{
          ...styles,
          position: "absolute",
          bottom: -595,
          right: window.screen.width * 0.5,
        }}
        width={90}
        alt={"obi"}
      /> */}
    </ThemeProvider>
  );
}

export default App;

export const buildInteractionObserverThreshold = (count = 100) => {
  const threshold = [];

  const parts = 1 / count;

  for (let i = 0; i <= count; i++) {
    threshold.push(parseFloat((parts * i).toFixed(2)));
  }

  return threshold;
};

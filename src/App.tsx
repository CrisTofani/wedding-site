import * as React from "react";
import "./App.css";
import "./firebase";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Location from "./components/Location";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Location />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

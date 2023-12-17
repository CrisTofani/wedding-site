import * as React from "react";
import "./App.css";
import "./services/firebase";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { InvitationForm } from "./pages/InvitationForm";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/invitation/:id",
    element: <InvitationForm />,
  },
  {
    path: "*",
    element: <div>404</div>, // <-- Add a 404 Obi page
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
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

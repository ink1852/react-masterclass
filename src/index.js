import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = {
  textColor: "#FFEAAD",
  backgroundColor: "#2D1D05",
};
const lightTheme = {
  textColor: "#2D1D05",
  backgroundColor: "#FFEAAD",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

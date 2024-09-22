import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("app")
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./styles/styles.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/index.css";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

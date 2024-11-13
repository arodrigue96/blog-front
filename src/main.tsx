import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/styles.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/index.css";
import router from "./router";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

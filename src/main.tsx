import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./post/store";
import router from "./router";
import "./styles/styles.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/index.css";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { Analytics } from "@vercel/analytics/react";
import "./styles.css";

const router = getRouter();

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
     <Analytics />
  </React.StrictMode>,
);

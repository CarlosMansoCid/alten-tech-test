import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, TanstackQueryProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <RouterProvider />
    </TanstackQueryProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  I18nProvider,
  RouterProvider,
  TanstackQueryProvider,
} from "./providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <TanstackQueryProvider>
        <RouterProvider />
      </TanstackQueryProvider>
    </I18nProvider>
  </React.StrictMode>
);

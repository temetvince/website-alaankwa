import React from "react";
import AppLoader from "./AppLoader";
import { createRoot } from "react-dom/client";

import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
   createRoot(rootElement).render(<AppLoader />);
}

import React from "react";
import AppLoader from "./AppLoader";
import { createRoot } from "react-dom/client";
import { run } from "./Query";

const rootElement = document.getElementById("root");
if (rootElement) {
   createRoot(rootElement).render(<AppLoader />);
}

await run();

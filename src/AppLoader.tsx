import React from "react";
import { PrimeReactContext, PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import App from "./App";

function AppLoader() {
   const value = {
      ripple: true,
   };

   return (
      <PrimeReactProvider value={value}>
         <PrimeReactContext.Consumer>
            {() => <App />}
         </PrimeReactContext.Consumer>
      </PrimeReactProvider>
   );
}

export default AppLoader;

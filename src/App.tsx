import React from "react";

import { Button } from "primereact/button";

function App() {
   const [count, setCount] = React.useState(0);

   return (
      <div className="App flex flex-column justify-content-center align-content-center align-items-center m-auto h-screen w-8rem">
         <Button
            className=""
            label="Click"
            icon="pi pi-plus"
            onClick={() => {
               setCount(count + 1);
            }}
            rounded
         />
         <div className="text-2xl text-900 mt-3">{count}</div>
      </div>
   );
}

export default App;

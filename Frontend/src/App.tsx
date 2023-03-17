import React from "react";
import Funcionalidades from "./components/Funcionalidades";

function App() {
  return (
    <div className="bg-neutral-100 flex-1 flex w-full ">
      <div className=" grid grid-cols-1 sm:grid-cols-5 container mx-auto gap-4">
        <div className="col-span-4">1</div>
        <div className="col-span-1">
          <Funcionalidades />
        </div>
      </div>
    </div>
  );
}

export default App;

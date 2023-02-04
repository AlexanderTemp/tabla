import { useEffect, useState } from "react";
import Valencia from "./pages/Valencia";
import Elemento from "./pages/Elemento";
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontal />} />
        <Route path="valencia" element={<Valencia />} />
        <Route path="elemento" element={<Elemento />} />
      </Routes>
    </>
  );
}
function Frontal() {
  return (
    <div className="">
      <div className="w-screen h-screen  flex flex-col justify-center items-center bg-[#0E1217] text-slate-100">
        <h2 className="text-6xl font-bold">Opciones</h2>
        <ul className="flex flex-col gap-4 mt-10">
          <li className="bg-[#CE3DF3] rounded-md text-4xl px-3 py-1 text-center"><Link to="/valencia">Valencias</Link></li>
          <li className="bg-[#CE3DF3] rounded-md text-4xl px-3 py-1 text-center"><Link to="/elemento">Elementos</Link></li>
        </ul>

      </div>

    </div>
  )
}

export default App;
import { useEffect, useState } from "react";
import check from '../assets/check.png';
import wrong from '../assets/wrong.png';
import { v4 as uuidv4 } from 'uuid'

const delay = ms => new Promise(res => setTimeout(res, ms));



const Elemento = () => {
 const [actual, setActual] = useState({
  elemento: "",
  valencia: "",
  opciones: []
 });
 const [acierto, setAcierto] = useState({
  click: 0,
  state: false
 })
 const colors = ['bg-red-500', 'bg-pink-500', 'bg-purple-500', 'bg-indigo-500', 'bg-blue-900', 'bg-cyan-800', 'bg-teal-800', 'bg-green-800', 'bg-orange-900']

 const valencias = [
  {
   valencia: "1+",
   grupo: ["Li", "Na", "K", "Rb", "Cs", "Fr", "Ag", "NH4"]
  },
  {
   valencia: "2+",
   grupo: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra", "Zn", "Cd"]
  },
  {
   valencia: "3+",
   grupo: ["Al", "Sc", "Ga", "Y", "In", "Ln", "Ac", "Cm"]
  },
  {
   valencia: "1+2+",
   grupo: ["Cu", "Hg"]
  },
  {
   valencia: "1+3+",
   grupo: ["Au", "Tl"]
  },
  {
   valencia: "2+3+",
   grupo: ["Fe", "Co", "Ni", "Sm", "Eu", "Yb"]
  },
  {
   valencia: "2+4+",
   grupo: ["Pb", "Ge", "Sn", "Pt", "Po"]
  },
  {
   valencia: "-1+1357",
   grupo: ["F", "Cl", "Br", "I", "At"]
  },
  {
   valencia: "-2+246",
   grupo: ["O", "S", "Se", "Te"]
  },
  {
   valencia: "-3+35",
   grupo: ["N", "P", "As", "Sb", "B"]
  }
  ,
  {
   valencia: "-4+24",
   grupo: ["C", "Si"]
  },
  {
   valencia: "236",
   grupo: ["Cr"]
  },
  {
   valencia: "2347",
   grupo: ["Mn"]
  },
  {
   valencia: "35",
   grupo: ["Bi"]
  },
  {
   valencia: "35",
   grupo: ["Bi"]
  },
  {
   valencia: "234",
   grupo: ["Ti"]
  },
  {
   valencia: "2345",
   grupo: ["V"]
  },
  {
   valencia: "23456",
   grupo: ["Mo", "W"]
  },
  {
   valencia: "12467",
   grupo: ["Re"]
  },
  {
   valencia: "2346",
   grupo: ["Os", "Ru"]
  },
  {
   valencia: "3456",
   grupo: ["U", "Am"]
  }
 ]

 function busqueda() {
  setActual({
   elemento: "",
   valencia: "",
   opciones: []
  })
  setAcierto({
   click: 0,
   state: false
  })
  let elements = []
  let valValencia = ""
  let valElemento = ""
  let randomPos = Math.floor(Math.random() * 4)
  for (var i = 0; i < 4; i++) {
   let eleccion = valencias[Math.floor(Math.random() * valencias.length)]

   if (i === randomPos) {
    valValencia = eleccion.valencia
    valElemento = eleccion.grupo.toString()
   }

   elements.push(eleccion.grupo.toString())
  }
  setActual({
   elemento: valElemento,
   valencia: valValencia,
   opciones: elements
  })


 }
 async function verificar(xElem) {
  console.log(xElem+" - "+actual.elemento)
  if (xElem === actual.elemento) {
   setAcierto({
    click: 1,
    state: true
   })
  } else {
   setAcierto({
    click: 1,
    state: false
   })
  }
  await delay(1000)
  busqueda()
 }


 useEffect(() => {
  busqueda()
 }, [])

 return (
  <div className="relative">
   {/* Bien o mal */}
   {
    (acierto.click === 1) && 
    <div className="absolute bg-transparent z-50 h-full w-full flex justify-center items-center ">
     {
      acierto.state === true ?
       <img className="w-[100px] h-[100px]" src={check} alt="check" />
       :
       <img className="w-[100px] h-[100px]" src={wrong} alt="wrong" />
     }
    </div>

   }

   <div className={`${(acierto.click === 1 && ' blur-lg')} flex flex-col items-center bg-[#0E1217] h-screen`}>
    <div className="my-5">
     <h2 className=" text-4xl text-[#BDCDD6]">Quimica práctica</h2>
    </div>

    {/* Cuerpo */}
    <div className="py-2 mt-16 px-3 flex flex-col gap-11 items-center">
     <div className="bg-slate-200 rounded-lg w-fit h-fit p-2 text-slate-900 flex items-center justify-center">
      <h3 className="text-7xl font-semibold">{actual.valencia}</h3>
     </div>

     {/* cuatro opciones */}
     <div className="grid grid-cols-1 gap-4">
      {
       actual.opciones.map(elem =>
       (
        <div
         key={uuidv4()}
         className={`${colors[Math.floor(Math.random() * 7)]}   p-2 rounded-lg w-fit h-fit text-slate-100 flex items-center justify-center cursor-pointer`}
         onClick={() => verificar(elem)}
        >

         <h3 className="text-5xl">{elem}</h3>
        </div>
       )
       )
      }
     </div>
    </div>


    {/* Refrescar */}
    <div className="mt-12 flex gap-2 justify-center">
     <button className="bg-transparent hover:bg-slate-100 text-slate-300 font-semibold text-xl hover:text-[#03C988] py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={busqueda}>Refrescar</button>
    </div>
   </div>

  </div>


 );
}

export default Elemento
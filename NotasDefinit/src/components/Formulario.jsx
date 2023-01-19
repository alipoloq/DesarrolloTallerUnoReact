import { useState, useEffect } from "react";

function Formulario() {
  const [nombre, setNombre] = useState('');
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-green-900 text-3xl text-center mb-5">
        Datos Estudiantes{' '}
      </h2>
      <form className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 ml-10">
        <div className="mb-5">
          <label htmlFor="estudiante" className="block text-gray-700 uppercase font-bold">Nombre estudiante:</label>
          <input id="estudiante" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre del estudiante" value={nombre} 
          onChange={(e)=>console.log(setNombre(e.target.value))}/>
        </div>
        <div className="mb-5">
          <label htmlFor="programa" className="block text-gray-700 uppercase font-bold">Programa:</label>
          <input id="programa" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Programa al que pertenece" />
        </div>
        <div className="mb-5">
          <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold">Direccion:</label>
          <input id="direccion" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Direccion del estudiante" />
        </div>
        <div className="mb-5">
          <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">Telefono:</label>
          <input id="telefono" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Telefono del estudiante" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email:</label>
          <input id="email" type="email" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Email del estudiante" />
        </div>
        <div className="mb-5">
          <label htmlFor="electiva" className="block text-gray-700 uppercase font-bold">Electiva II</label>
          <input id="electiva" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Materia Electiva II" />
        </div>
        <div className="mb-5">
          <label htmlFor="mineria" className="block text-gray-700 uppercase font-bold">Mineria de Datos</label>
          <input id="mineria" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Materia Mineria de Datos" />
        </div>
        <div className="mb-5">
          <label htmlFor="programacion" className="block text-gray-700 uppercase font-bold">Logica de Programacion</label>
          <input id="programacion" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Materia Logica de Programacion" />
        </div>
        <input type="submit" value="Agregar Notas del Estudiante" className="bg-cyan-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-cyan-800 
        cursor-pointer transition-colors"/>
      </form>
    </div>
  )
}

export default Formulario
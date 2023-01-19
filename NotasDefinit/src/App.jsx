import DatosEstudiantes from "./components/DatosEstudiantes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoEstudiantes from "./components/ListadoEstudiantes"
import React, { Component } from 'react';

function App() {

  return (
    <div className="container mx-auto mt-20">
      <div className="mb-5 mt-5 py-10 px-5">
        {/*Aqui utilizamos la url donde esta alojada la imagen*/}
        <img src="https://observatorio.tec.mx/wp-content/uploads/2022/05/bigstock-Top-View-Of-Young-Students-Wit-204873577.jpeg" />
      </div>
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario/>
        <ListadoEstudiantes/>
        <DatosEstudiantes/>
      </div>
    </div>
  )
}

export default App

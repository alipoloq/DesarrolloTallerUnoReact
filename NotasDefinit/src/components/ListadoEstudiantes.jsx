import DatosEstudiantes from "./DatosEstudiantes"

function ListadoEstudiantes() {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen'>
        <h2 className='text-green-500 font-black text-3xl text-center'>Notas Estudiantes</h2>
        <DatosEstudiantes/>
        <DatosEstudiantes/>
        <DatosEstudiantes/>
    </div>
  )
}

export default ListadoEstudiantes
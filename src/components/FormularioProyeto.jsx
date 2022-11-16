import {useState, useEffect} from 'react'
import useProyectos from '../hooks/useProyectos'
import { useParams } from 'react-router-dom'
import Alerta from './Alerta'


const FormularioProyeto = () => {
    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setfechaEntrega] = useState('')
    const [cliente, setCliente] = useState('')

    const {mostrarAlerta, alerta, submitProyecto, proyecto} = useProyectos();

    const params = useParams()

    useEffect(() => {
        if(params.id){
            setId(proyecto._id)
            setNombre(proyecto.nombre)
            setDescripcion(proyecto.descripcion)
            setfechaEntrega(proyecto.fechaEntrega?.split('T')[0])
            setCliente(proyecto.cliente)
        }
    }, [params])


    const handleSubmit = async e => {
        e.preventDefault();
        if([nombre, descripcion, fechaEntrega, cliente].includes('')){
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return;
        }

        await submitProyecto({id, nombre, descripcion, fechaEntrega, cliente})
        setId(null)
        setNombre('')
        setDescripcion('')
        setfechaEntrega('')
        setCliente('')
        
    }

    const {msg} = alerta;

  return (
    <form className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow'
    onSubmit={handleSubmit}>
        {
            msg && <Alerta alerta={alerta}/>
        }
        <div className='mb-5'>
            <label 
            className='text-gray-700 uppercase font-bold text-sm'
            htmlFor="nombre">
                Nombre Proyecto
            </label>
            <input
            id="nombre"
            type="text"
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Nombre del proyecto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label 
            className='text-gray-700 uppercase font-bold text-sm'
            htmlFor="descripcion">
                Descripcion
            </label>
            <textarea
            id="descripcion"
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Descripcion del proyecto'
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label 
            className='text-gray-700 uppercase font-bold text-sm'
            htmlFor="fecha-entrega">
                Fecha Entrega
            </label>
            <input
            id="fecha-entrega"
            type="date"
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fechaEntrega}
            onChange={e => setfechaEntrega(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label 
            className='text-gray-700 uppercase font-bold text-sm'
            htmlFor="cliente">
                Nombre del cliente
            </label>
            <input
            id="cliente"
            type="text"
            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Nombre del Cliente'
            value={cliente}
            onChange={e => setCliente(e.target.value)}
            />
        </div>
        <input
        type="submit"
        value={id ? "Actualizar Proyecto" : "Crear Proyecto"}
        className='bg-sky-600 w-full p-3 uppercase font-bold text-white
        rounded cursor-pointer hover:bg-sky-700 transition-colors'
        />
    </form>
  )
}

export default FormularioProyeto
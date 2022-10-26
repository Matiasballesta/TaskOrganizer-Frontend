import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
     <h1 className="text-sky-600 font-black text-6xl capitalize">
        Inicia secion y administra tus {""}
      <span className="text-slate-700">Proyectos</span>
     </h1>
     <form className="my-10 bg-white shadow rounded-lg px-10 py-10">
        <div className="my-5">
        <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
            //El htmlfor selecciona el campo con el id en el input, es para seleccionar en ese campo y que entre.
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
            //El htmlfor selecciona el campo con el id en el input, es para seleccionar en ese campo y que entre.
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to="registrar" 
        className='block text-center my-5 text-slate-500 uppercase text-sm'>
        No tienes una cuenta? Regístrate
        </Link>
        <Link to="olvide-password" 
        className='block text-center my-5 text-slate-500 uppercase text-sm'>
        Olvide mi password
        </Link>
      
      </nav>
    </>
  )
}



export default Login



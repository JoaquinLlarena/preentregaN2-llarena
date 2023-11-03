import { useForm } from 'react-hook-form';

export const Contacto = () => {

  const { register, handleSubmit } = useForm ();

  const enviar = (data) => {


console.log(data);


  };
  
  
  
  return (

    <div className="container">

      <h1 className="main-title"> TACTICAL© contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="ingresa tu e-mail"
          {...register("email")}
        />
          <input
          type="password"
          placeholder="ingresa tu contraseña"
          {...register("contraseña")}
        />
         <button className="enviar" type="submit">enviar</button>
      </form>

    </div>
  );
};

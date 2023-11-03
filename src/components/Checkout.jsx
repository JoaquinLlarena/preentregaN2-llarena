import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase/config';

export const Checkout = () => {
 
    const [pedidoId, setPedidoId ] = useState ("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
 



    const { register, handleSubmit } = useForm ();

    const comprar = (data) => {
  const pedido = { 

    cliente: data,
    producto: carrito,
    total: precioTotal()
  }

    console.log(pedido)

    const pedidoRef = collection (db, "pedidos");

    addDoc(pedidoRef, pedido)
    .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
    })

    if (pedidoId) {
     return (
        <div className="container">
           <h1 className='main-title'>muchas gracias por tu compra!</h1> 
           <p>tu numero de pedido es: {pedidoId}</p>
        </div>
     )
    }

  
    
  
  
    };


    return (

        <div className="container">

        <h1 className="main-title"> Finalizar comrpa Tactical</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
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
         <button className="enviar" type="submit">Comprar</button>
        </form>
  
      </div>


    
  )
}

import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />

      <div>
        <h4>{producto.titulo}</h4>
        <p>precio: ${producto.precio}</p>
        <p>Categoría:{producto.categoria}</p>
        <p>{producto.descripcion}</p>  
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>      
              
              
              
              
              
        
              
              </div>
    </div>
  );
};

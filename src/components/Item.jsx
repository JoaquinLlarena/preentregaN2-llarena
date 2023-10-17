import React from "react";

export const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} />

      <div>
        <h4>{producto.titulo}</h4>
        <p>precio: ${producto.precio}</p>
        <p>Categoría:{producto.categoria}</p>
        <p>{producto.descripcion}</p>  
        <a href={`/item/${producto.id}`} className="ver-mas">ver mas</a>      
              
              
              
              
              
              
              
              </div>
    </div>
  );
};

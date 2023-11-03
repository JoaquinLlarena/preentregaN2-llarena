import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

 const CartWitged = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
    
        <Link to="/carrito" className="menu-link">
          carrito
          <span className="num-carrito"> {cantidadEnCarrito()} </span>
        </Link>
     
    </div>
  );
};

export default CartWitged



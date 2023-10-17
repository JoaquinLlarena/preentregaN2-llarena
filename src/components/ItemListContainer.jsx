import {useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
 

  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (

    <div>

<ItemList productos={productos}/>

    </div>
  )
  
  

  
  
}

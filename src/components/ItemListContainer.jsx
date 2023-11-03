import {useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where  } from "firebase/firestore";
import { db } from "./firebase/config";
export default function ItemListContainer() 


{

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState ("Productos");


  useEffect(() => {

    const productoRef = collection(db, "productos");

    const q = categoria ? query(productoRef, where("categoria", "==", categoria)) : productoRef;

    getDocs(q)
    .then((resp) => {


      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        })
      )


    })




  }, [categoria]);

  return (

    <div>

<ItemList productos={productos} titulo={titulo} />

    </div>
  )
  
  

  
  
}

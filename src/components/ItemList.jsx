import React from 'react'
import { Item } from './Item'

export default function ItemList({productos}) {
  
  
  
  
    return (
    <div className='container'>
        <h2 className='main-title'>productos</h2>

        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id}/> )}
        </div>


    </div>
  )
}

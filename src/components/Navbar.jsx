import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
   <nav className='navbar'>
    <a to="/"><h1>TacticalShop</h1></a>

    <ul className='menu'>
<li>< Link to="/" className='menu-link'>inicio</Link></li>
<li>< Link to="/nosotros"className='menu-link'>nosotros</Link></li>
<li>< Link to="#"className='menu-link'>contactos</Link></li>
<li>< Link to="#"className='menu-link'>productos</Link></li>

    </ul>
   </nav>
  )
}

export default Navbar
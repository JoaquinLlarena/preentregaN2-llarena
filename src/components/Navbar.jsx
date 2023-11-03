import React from 'react'
import { Link } from 'react-router-dom'
import CartWitged from './CartWitged'




const Navbar = () => {
  return (
   <nav className='navbar'>
    <Link to="/" className='logo'><h1>TacticalShop©</h1> </Link>

    <ul className='menu'>
<li>< Link to="/" className='menu-link'>inicio</Link></li>
<li>< Link to="/productos" className='menu-link'>productos</Link></li>
<li>< Link to="/productos/medias" className='menu-link'>medias</Link></li>
<li>< Link to="/productos/pantalones" className='menu-link'>pantalones</Link></li>
<li>< Link to="/productos/remeras" className='menu-link'>remeras</Link></li>
<li>< Link to="/productos/gorras" className='menu-link'>gorras</Link></li>
<li>< Link to="/nosotros" className='menu-link'>nosotros</Link></li>
<li> <CartWitged/> </li> 





    </ul>
   </nav>
  )
}

export default Navbar
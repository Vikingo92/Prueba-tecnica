import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Productos from './Productos';

export const Navbar = () => {
  return (
    <div>
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Productos'>Productos</Link>
                <Link to='/About'>About</Link>
            </nav>
        </div>
    </div>
  )
}

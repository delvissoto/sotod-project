import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <>
    <nav >
        <ul className='navbar'>
            <li>
                <Link to="/items">Auctions</Link>
            </li>
           
            <li>
                <Link to='/adduser'>Log in / Register </Link>
            </li>
            <li>
                <Link to='/additem'>Add item </Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar

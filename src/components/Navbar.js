import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"


const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className='Logo'>
        <Link id='freedom' className='Links'  to="/items" >Freedom Auction</Link>
        </div>
        <ul className='navlinks'>
            <li>
                <Link className='Links'  to="/items">Auctions</Link>
            </li>
           
            <li>
                <Link className='Links'  to='/adduser'>Log in / Register </Link>
            </li>
            <li>
                <Link className='Links' to='/additem'>Add item </Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar

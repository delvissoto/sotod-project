import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Auctions</Link>
            </li>
            <li>
                <Link>My Auctions</Link>
            </li>
            <li>
                <Link to='/additems'>Add Items</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar

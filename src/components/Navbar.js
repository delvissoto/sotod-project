import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
import axios from 'axios'


const Navbar = () => {
    const [auth, setAuth] = useState(true)
    const [message, setMessage]= useState('')
    const [name, setName] = useState('')
    

    useEffect(() =>{
        axios.get("http://52.86.154.61:8080/users",)
                 .then(res => {
                  console.log('API Response:', res.data)
                  if(res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.id)
                  }else{
                    setAuth(false);
                    setMessage(res.data.Error)
                  }
                })
                 .catch(err => console.log(err))
                
    }, [])


  return (
    <>
    {
        auth ? 
        <div>
    <nav className='navbar'>
        <div className='Logo'>
        <Link id='freedom' className='Links'  to="/items" >Freedom Auction</Link>
        </div>
        <ul className='navlinks'>
            <li>
                <Link className='Links'  to="/items">Auctions</Link>
            </li>
           
            {name !== '' && <li>{name}</li>}
            <li>
                <Link className='Links' to='/additem'>Add item </Link>
            </li>
        </ul>
        
    </nav>
    <Outlet/>
    </div>
    : 
    <div>
    <p>Session Expired!</p>
    
    {message && <p>{message}</p>}
    <Link to="/login">Log in</Link>
    </div>
        }   
    </>
  )
}

export default Navbar

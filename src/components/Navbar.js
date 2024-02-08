import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
import axios from 'axios'


const Navbar = () => {
    const [auth, setAuth] = useState(false)
    // const [message, setMessage]= useState('')
    const [name, setName] = useState('')
    axios.defaults.withCredentials = true;  

    useEffect(() =>{
        axios.get("http://52.86.154.61:8080/users",).then((response)=>{
          if(response.data.loggedIn == true){
            setAuth(true)
            setName(response.data.user[0].user_name)
          }
          else{
            setAuth(false)
          }
        })
                
                
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
           
            <li>{name}</li>
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
    
    {/* {message && <p>{message}</p>} */}
    <Link to="/login">Log in</Link>
    </div>
        }   
    </>
  )
}

export default Navbar

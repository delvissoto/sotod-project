import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
    const [auth, setAuth] = useState(false)
    // const [message, setMessage]= useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()
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

    const handleLogout = () =>{
      // axios.get("http://52.86.154.61:8080/users/logout")
      // .then(res =>{
      //   if(res.data.message === "success"){
      //     navigate('/login')
      //   } else {
      //     alert("error")
      //   }
      // })
    }


  return (
    <>
    {
        auth ? 
        <div>
    <nav className='navbar'>
        <div className='Logo'>
        <Link id='freedom' className='Links'  to="/" >Freedom Auction</Link>
        </div>
        <ul className='navlinks'>
            <li>
                <Link className='Links'  to="/">Auctions</Link>
            </li>
            <li>
                <Link className='Links' to='/additem'>Add item </Link>
            </li>
            <li><Link className='Links' to="/profile" >{name}</Link></li>

            <li ><button onClick={handleLogout}>Logout</button></li>
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

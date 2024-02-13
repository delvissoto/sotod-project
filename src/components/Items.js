import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [user_Id, setUser_Id] = useState(0)

    useEffect(() =>{
        const fetchAllItems = async ()=>{
            axios.get("http://52.86.154.61:8080/users",).then((response)=>{
      
        setName(response.data.decodedToken.userName);
        const userId = response.data.decodedToken.userId;
        setUser_Id(userId);
      
         })
            try{
                const res = await axios.get("http://52.86.154.61:8080/items")
                 setItems(res.data)
                
            }catch(err){
                console.log(err)
            }
        }
        fetchAllItems();
    }, [])

    const handleDelete = async (item_id) =>{
        
        try{  
          
            await axios.delete(`http://52.86.154.61:8080/items/${item_id}`)
            setItems(prevItems => prevItems.filter(item => item.item_id !== item_id));
   
            
        }catch(err){
            console.log("Error deleting item: ", err)
        }
    }
    


  return (
    <div className='items_areas'>
        {items.map((item) =>(
            <div key = {item.item_id} className='item_card'>
                <div>
                <img src={item.item_image} alt="An item" className='item_image'/>
                </div>
                <h3 className='card-h3'>{item.item_name}</h3>
                <div className='Item_info'>
            <ul className='card-descriptions'>
                <li><h3 className='card-h3'>Description</h3></li>
             
                <li>{item.description}</li>
                
               
                
                
            </ul>
            <ul className='card-descriptions'>
                <li><h3 className='card-h3'>Features</h3></li>
                <li>{item.features}</li>
                <li>{item.features_1}</li>
                <li>{item.features_2}</li>
                <li>{item.features_3}</li>
                <li>{item.features_4}</li>
            </ul>
            </div>
            {user_Id === item.User_id ? (
        <div className='button_area'>
            <button className='item_button' onClick={() => handleDelete(item.item_id)}>Delete</button>
            <Link to={`/updateitems/${item.item_id}`}>
            <button className='item_button'>Update</button>
            </Link>
        </div>
        ) : null}
            
            </div>
        ))}
    </div>
  )
}

export default Items
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
  const [name, setName] = useState('')
  const [user_Id, setUser_Id] = useState(0)
  
 

  useEffect(() =>{
    axios.get("http://52.86.154.61:8080/users",).then((response)=>{
      
        setName(response.data.decodedToken.userName);
        const userId = response.data.decodedToken.userId;
        setUser_Id(userId);
      
        
    
    })
            
            
}, [])

  const initialItemsState = {
    item_name: "",
    description: "",
    features: "", 
    features_1: "", 
    features_2: "", 
    features_3: "", 
    features_4: "",
    item_image:"", 
    
    

  };
  
  const [items, setItems] = useState(initialItemsState);
  const navigate = useNavigate();

 

  

  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      ...items,
      User_id: parseInt(user_Id),
      User_name: name,
    };
    try {
      await axios.post("http://52.86.154.61:8080/items", userData,);
      console.log(userData)
      navigate('/');
    } catch (err) {
      console.log('Error submitting form:', err);
      
    }
  };

  return (
    <section>
     
      
      <form className='item_form' onSubmit={handleSubmit}>
        <h1>New Auctioned Item</h1>
        <p>{name}</p>
        <p>{user_Id}</p>
        
        <label  className='labels' htmlFor='item_name'>Item Name </label><br/>
        <input className='additemsinput' type='text' id='item_name' name='item_name' value={items.item_name} onChange={handleChange} required /><br />

        <label className='labels' htmlFor='description'>Description </label><br/>
        <input className='additemsinput' type='text' id='description' name='description' value={items.description} onChange={handleChange} required /><br />

        <label className='labels' htmlFor='features'>Features </label><br/>
        <input className='additemsinput' type='text' id='features' name='features' value={items.features} onChange={handleChange} required /><br />

        <input className='additemsinput' type='text' id='features_1' name='features_1' value={items.features_1} onChange={handleChange}/><br />

        <input className='additemsinput' type='text' id='features_2' name='features_2' value={items.features_2} onChange={handleChange}  /><br />
        
        <input className='additemsinput' type='text' id='features_3' name='features_3' value={items.features_3} onChange={handleChange} /><br />

        <input className='additemsinput' type='text' id='features_4' name='features_4' value={items.features_4} onChange={handleChange} /><br />

        <label className='labels' htmlFor='item_image'> Add Image </label><br/>
        
        <input type='file' name='item_image' value={items.item_image} onChange={handleChange} ></input><br/>

        <input className='submitbutton' type='submit' value="Publish Item" /><br/>
      </form>
    </section>
  );
};
export default AddItems
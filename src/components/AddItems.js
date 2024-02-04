import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
  const initialItemsState = {
    item_name: "",
    description: "",
    features: "", 
    features_1: "", 
    features_2: "", 
    features_3: "", 
    features_4: ""
  };

  const [items, setItems] = useState(initialItemsState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://52.86.154.61:8080/items", items);
      console.log(items)
      navigate('/');
    } catch (err) {
      console.log('Error submitting form:', err);
      
    }
  };

  return (
    <section>
     
      
      <form className='item_form' onSubmit={handleSubmit}>
        <h1>New Auctioned Item</h1>
        
        <label  className='labels' htmlFor='item_name'>Item Name </label><br/>
        <input className='additemsinput' type='text' id='item_name' name='item_name' value={items.item_name} onChange={handleChange} required /><br />

        <label className='labels' htmlFor='description'>Description </label><br/>
        <input className='additemsinput' type='text' id='description' name='description' value={items.description} onChange={handleChange} required /><br />

        <label className='labels' htmlFor='features'>Features </label><br/>
        <input className='additemsinput' type='text' id='features' name='features' value={items.features} onChange={handleChange} required /><br />

        <input className='additemsinput' type='text' id='features_1' name='features_1' value={items.features_1} onChange={handleChange} required /><br />

        <input className='additemsinput' type='text' id='features_2' name='features_2' value={items.features_2} onChange={handleChange} required /><br />
        
        <input className='additemsinput' type='text' id='features_3' name='features_3' value={items.features_3} onChange={handleChange} required /><br />

        <input className='additemsinput' type='text' id='features_4' name='features_4' value={items.features_4} onChange={handleChange} required /><br />

        <input className='submitbutton' type='submit' value="Publish Item" />
      </form>
    </section>
  );
};
export default AddItems
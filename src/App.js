

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';
import AddUser from './components/AddUser';
import UpdateItems from './components/UpdateItems';
import AddItems from './components/AddItems';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Items/>}/>
          <Route path="adduser" element={<AddUser/>}/>
          <Route path='items' element={<Items/>}/>
          <Route path ='updateitems/:item_id' element={<UpdateItems/>}/>
          <Route path='additem' element={<AddItems/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

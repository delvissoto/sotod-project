

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';
import AddItems from './components/AddItems';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Items/>}/>
          <Route path="additems" element={<AddItems/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

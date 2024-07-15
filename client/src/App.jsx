
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'; 
import Sucre from './components/Sucre'; 
import Panier from './components/Panier'; 
import Sale from './components/Sale'; 
import Jus from './components/Jus'; 
import Patisseries from './components/Patisseries';
// Patisseries i mean ACCEUIL
import Ingredients from './components/Ingredients';
import Contact from './components/Contact';
import Login from './components/Login/Auth';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Patisseries />} />
          <Route path="patisserie" element={<Patisseries />} />
          <Route path="sucre" element={<Sucre />} />
          <Route path="Panier" element={<Panier />} />
          <Route path="sale" element={<Sale />} />
          <Route path="jus" element={<Jus />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="contact" element={<Contact />} />

          {/* Define other routes as needed */}
        </Route>
        
          <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

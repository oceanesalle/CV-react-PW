import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'; 
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';
import NotFound from './pages/NotFound';
import Porfolio from './pages/Porfolio';

const App = () => {
  return (
    <div>
         <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/compétences' element={<Knowledge/>} />
      <Route path='/portfolio' element={<Porfolio/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route element={NotFound} />
         </Routes> 
    </div>
  );
};

export default App;

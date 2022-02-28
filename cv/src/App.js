import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import home from './pages/home.js'; 
import Contact from './pages/Contact';
import knowledge from './pages/knowledge';
import NotFound from './pages/NotFound';
import Porfolio from './pages/Porfolio';

const App = () => {
  return (
    <div>
         <Routes> 
      <Route path='/' element={home} />
      <Route path='compétences' element={knowledge} />
      <Route path='/portfolio' element={Porfolio} />
      <Route path='/contact' element={Contact} />
      <Route element={NotFound} />
         </Routes> 
    </div>
  );
};

export default App;

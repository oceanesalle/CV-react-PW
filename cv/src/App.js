import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './pages/home.js'; 
import Contact from './pages/Contact';
import knowledge from './pages/knowledge';
import NotFound from './pages/NotFound';
import Porfolio from './pages/Porfolio';

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Switch> 
      <Route path='/' exact compononent={home} />
      <Route path='compétences' compononent={knowledge} />
      <Route path='/portfolio' compononent={Porfolio} />
      <Route path='/contact' compononent={Contact} />
      <Route compononent={NotFound} />
         </Switch> 
       </BrowserRouter>
    </div>
  );
};

export default App;

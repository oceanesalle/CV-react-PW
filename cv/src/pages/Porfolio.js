import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjetList';

const Porfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <ProjectList />
    </div>
  );
};

export default Porfolio;
import React from 'react';
import Navigation from '../components/Navigation';

const home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Océane Sallé</h1>
          <h2>Développeur Full Stack Junior</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="blank">Télécharger le CV</a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default home; 
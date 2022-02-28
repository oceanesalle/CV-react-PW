import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard'; 

const Contact  = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
         <div className="contactBox">
          <h1>Contactez-moi</h1> 
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Tours</span> 
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0766724540">
                <span className="clickInput"
                onClick={() => { alert('Téléphone copié!');}}>07 66 72 45 40</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="oceanesalleiae@gmail.com">
                <span className="clickInput"
                onClick={() => { alert('E-mail copié!');}}>monmail@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
         </div>
         <div className="socialNetwork">
           <ul>
             <a href="https://" target="_blank"
             rel ="noopener noreferrer">
               <h4>LinkedIn</h4>
               <i className="fab fa-linkedin"></i>
             </a>
             <a href="https://" target="_blank"
             rel ="noopener noreferrer">
               <h4>github</h4>
               <i className="fab fa-github"></i>
             </a>
           </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Contact ;
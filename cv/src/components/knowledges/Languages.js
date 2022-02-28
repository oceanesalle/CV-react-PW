import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
    {id:1, value: "Javascript", xp:1.8},
    {id:2, value: "Css", xp:0.7}, 
   ],
    frameworks: [
      {id:1, value: "React", xp:0.5},
    ]
  }
  render() {
    let {languages, frameworks} = this.state;
    
    return (
      <div className="languagesFrameworks">
        <ProgressBar 
        languages={languages}
        className="languageDisplay"
        title="languages"
        />
        <ProgressBar 
        languages= {frameworks}
        title="frameworks & Bibilothèques"
        className="frameworksDisplay"
        />
        
      </div>
    );
  }
}

export default Languages;
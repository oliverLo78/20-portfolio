import React, { useState } from 'react';

import headshot from '/src/images/oliver ProfilePic-sm.jpg'

function About() {
    return (
      <div className="about-container">
          <div className="left-side">
          <h1 style={{fontSize: '60px'}}>About Me!</h1>
          <p className="mt-5" style={{width: '80%', fontSize: '20px'}}>
          Hi my name is Oliver  Ready to embark on the journey of Software Engineer. I enjoy creating Websites and software applications to improve the end user experience. Very excited to be a part of UCF coding bootcamp. A catalyst with plenty of energy in learning HTML & CSS and Git, JavaScript & Web APIs, Node.js</p>
          <br></br>
          <p className='mt-5' style={{width: '80%', fontSize: '20px'}}>
          When I’m not coordinating projects and promoting efficiency, I enjoy visiting beautiful islands like Punta Cana, Bora Bora, trying out new recipes, or honing my skills with new courses.</p>
          <br></br>
                  </div>
          <img className="headshot" src={headshot} alt="Oliver Lopez"></img>
      </div>
      )
  }

export default About;










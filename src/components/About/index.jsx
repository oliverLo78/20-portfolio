import React from 'react';
import './about.css';
import headshot from  '../../images/oliver ProfilePic-sm.jpg';

function About() {
    return (
      <div className="about-container">
          <div className="left-side">
          <img className="headshot" src={headshot} alt="Oliver Lopez"></img>
          <h1 style={{fontSize: '60px'}}>About Me!</h1>
          <p className="mt-5" style={{width: '80%', fontSize: '20px'}}>
          Hi my name is Oliver  Ready to embark on the journey of Software Engineer. I enjoy creating Websites and software applications to improve the end user experience. Very excited to be a part of UCF coding bootcamp. A catalyst with plenty of energy in learning HTML & CSS and Git, JavaScript & Web APIs, Node.js.<br></br><br></br>
          When I’m not coordinating projects and promoting efficiency, I enjoy visiting beautiful islands like Punta Cana, Bora Bora, trying out new recipes, and working at honing my skills with new coding courses.<br></br><br></br>
          I am very excited of being involved in the tech industry as a Web Developer and would jump at the opportunity to be a part of a company that shares similar values.</p><br></br>
          </div>
      </div>
      )
  }

export default About;










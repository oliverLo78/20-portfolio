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
          Hi my name is Oliver  Ready to embark on the journey of Software Engineer. I enjoy creating Websites and software applications to improve the end user experience. Very excited to be a part of UCF coding bootcamp. A catalyst with plenty of energy in learning HTML & CSS and Git, JavaScript & Web APIs, Node.js.</p><br></br>
          <p className='mt-5'style={{width: '80%', fontSize: '20px'}}>I enjoy visiting beautiful islands like Punta Cana, Bora Bora, trying out new recipes, and training on Gracie Jiu-Jitsu for self delf. Project manager with leadership experience and technical know-how. Previous experience includes project manager for a general contractor company in Winter Garden FL, ANC Roofing, where I oversaw the execution of weekly re-roofs and managed a team of seven-five crew members.</p><br></br>
          <p className='mt-5' style={{width: '80%', fontSize: '20px'}}>Additionally, I completed the Web Developer Certificate at the University of Central Florida, where I developed knowledge and experience in Scrum and Agile frameworks as well as Software and Project Management lifecycles, among others. Planned, developed, and successfully executed projects, deployed by Heroku, and have led teams in previous roles of varying size to meet company goals. Excited to combine technical training and management experience to continue leading teams to success.</p>
          </div>
      </div>
      )
  }

export default About;










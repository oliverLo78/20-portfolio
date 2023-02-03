import React from 'react';

import { FaUserTie } from 'react-icons/fa';

const styles = {
  sectionStyles: {
    background: 'aqua',
    margin: '',
    font: '12px'
  },
};

const About = () => {
  return (
    <div style={styles.sectionStyles} className="">
      <h1>Hi, how are you doing?</h1>
      <FaUserTie  size="3em" color='blue' />
      <hr />

      <div className='greeting'>
      <p>
        Ready to embark on the journey of Software Engineer. I enjoy creating Websites and software applications to improve the end user experience. Very excited to be a part of UCF coding bootcamp. I'm a catalyst with plenty of energy inlearning HTML & CSS and Git, JavaScript & Web APIs, Node.js
        With each project, I aim to understand how best to engage users for an impactful user experience while keeping stakeholder initiatives in mind. I practice fiscal responsibility to optimize business solutions and product outcomes.
        When I’m not coordinating projects and promoting efficiency, I enjoy visiting beautiful islands like Punta Cana and Bora Bora, trying out new recipes, or honing my skills with new courses.
      </p>
    

      </div>
    </div>
  
  );
}

export default About;
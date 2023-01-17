import React from 'react';

import { FaUserTie } from 'react-icons/fa';

const styles = {
  sectionStyles: {
    background: 'aqua',
    margin: '20px',
    font: '12px'
  },
};

const About = () => {
  return (
    <div style={styles.sectionStyles} className="">
      <h1>Hi, how are you doing? my name is Oliver</h1>
      <FaUserTie  size="3em" color='blue' />
      <hr />

      <div className='greeting'>
      <p>
        Ready to embark on the journey of Software Engineer. I enjoy creating Websites and software applications to improve the end user experience. Very excited to be a part of UCF coding bootcamp. I'm a catalyst with plenty of energy inlearning HTML & CSS and Git, JavaScript & Web APIs, Node.js
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro perferendis ipsa unde cumque consectetur possimus recusandae nihil. Maxime quo culpa cumque blanditiis ipsam odit id incidunt, asperiores sunt enim.
      </p>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='skills-list'>
          <li className='hard-skills'>
            <h2>Front-End Developer</h2>
            <span> </span>
          </li>
          <li className='hard-skills'>
            <h2>Back-End Developer</h2>
            <span> </span>
          </li>
          <li className='hard-skills'>
            <h2>Coding Languages</h2>
            <span></span>
          </li>
        </ol>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  
  );
}

export default About;
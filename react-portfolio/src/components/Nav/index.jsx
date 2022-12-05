import React from 'react';

const Nav = ({ showAbout, showProjects, showResume, showContact }) => {
const linkStyle = { border: '1px black', padding: '5px'};

  return (
    <div className="nav nav-tabs" 
      style={{ 
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
      
    <div className='nav-item' style={linkStyle}>
      <h1 onClick={{showAbout}}>About</h1>
      <h1 onClick={{showProjects}}>Projects</h1>
      <h1 onClick={{showResume}}>Resume</h1>
      <h1 onClick={{showContact}}>Contact</h1>
    </div>
  </div>

  );
}

export default Nav;
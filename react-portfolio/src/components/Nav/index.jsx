import React from 'react';


const Nav = ({ showAbout, showProjects, showResume, showContact }) => {
  return (
    <div className="nav nav-tabs" style={{ display: 'flex', justifyContent: 'center', 
      alignItems: 'center' }}>

    <div className='nav-item'>
      <h1 onClick={{showAbout}}>About</h1>
      <h1 onClick={{showProjects}}>Projects</h1>
      <h1 onClick={{showResume}}>Resume</h1>
      <h1 onClick={{showContact}}>Contact</h1>
    </div>
  </div>

  );
}

export default Nav;
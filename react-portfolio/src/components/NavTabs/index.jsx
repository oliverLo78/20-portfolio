import React from 'react';
import Avatar from '@mui/material/Avatar';

import './NavTabs.css';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
function NavTabs({ showProjects, showAbout, showResume, showContact, showSkills, pageIndex }) {
  return (
    <ul className="nav nav-tabs">
      <Avatar
        alt="Oliver Lopez"
        src="/public/images/oLprofile.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <h1 className=''>Oliver Lopez</h1>
      <li className="nav-item">
        <h1 
          onClick={showAbout}

          //*  TODO: Add a comment explaining what kind of operator this is and what it is checking for
          className={pageIndex === 0 ? 'nav-link active' : 'nav-link'}
        >
          About
        </h1>
      </li>
      <li className="nav-item">
        <h1 
          onClick={showSkills}

          //*  TODO: Add a comment explaining what kind of operator this is and what it is checking for
          className={pageIndex === 1 ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </h1>
      </li>
      <li className="nav-item">
        <h1
          onClick={showProjects}

          //  TODO: Add a comment explaining what this logic is doing
          className={pageIndex === 2 ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </h1>
      </li>
      <li className="nav-item">
        <h1
          onClick={showResume}
          //  TODO: Add a comment explaining what this logic is doing
          className={pageIndex === 3 ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </h1>
      </li>
      <li className="nav-item">
        <h1
          //  TODO: Add a comment explaining what this logic is doing
          onClick={showContact}
          className={pageIndex === 4 ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </h1>
      </li>
    </ul>
  );
}

export default NavTabs;

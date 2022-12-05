import React from 'react';
import './NavTabs.css';


// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ showProjects, showAbout, showResume, showContact, pageIndex }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <h1 
          onClick={() => showAbout}

          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          className={pageIndex === 0 ? 'nav-link active' : 'nav-link'}
        >
          About
        </h1>
      </li>
      <li className="nav-item">
        <h1
          onClick={() => showProjects}

          //  TODO: Add a comment explaining what this logic is doing
          className={pageIndex === 1 ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </h1>
      </li>
      <li className="nav-item">
        <h1
          onClick={() => showResume}
          //  TODO: Add a comment explaining what this logic is doing
          className={pageIndex === 2 ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </h1>
      </li>
      <li className="nav-item">
        <h1
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => showContact}
          className={pageIndex === 3 ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </h1>
      </li>
    </ul>
  );
}

export default NavTabs;

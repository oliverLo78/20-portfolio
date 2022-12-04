import React from 'react';


// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="/Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/About"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/Nav"
          onClick={() => handlePageChange('Nav')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Nav' ? 'nav-link active' : 'nav-link'}
        >
          Nav
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/Contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

import React, { useState } from "react";
import "./header.css";

const Header = ({
  currentPage,
  showAbout,
  showProjects,
  showResume,
  showSkills,
  showContact,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navItemClass = (index) =>
    index === currentPage ? "header-ul-li active" : "header-ul-li";

  return (
    <header className="container-fluid d-flex justify-content-between header-background">
      {/* Name / Branding */}
      <div className="name-header">
        <h2 className="first-name">Oliver</h2>
        <h2 className="last-name">Lopez</h2>
      </div>

      <h2 className="title">Front-End Developer</h2>

      {/* Desktop Nav */}
      <ul className="header-ul">
        <li className={navItemClass(0)} onClick={showAbout}>
          About Me
        </li>
        <li className={navItemClass(1)} onClick={showProjects}>
          Portfolio
        </li>
        <li className={navItemClass(2)} onClick={showResume}>
          Resume
        </li>
        <li className={navItemClass(2)} onClick={showSkills}>
          Skills
        </li>
        <li className={navItemClass(3)} onClick={showContact}>
          Contact
        </li>
      </ul>

      {/* Mobile Nav */}
      <nav className="navBar">
        <button onClick={handleMenu} aria-label="Toggle navigation">
          {menuOpen ? (
            <>
              <i className="fa-solid fa-x header-icons" />
              <span className="sr-only">Close</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-bars header-icons" />
              <span className="sr-only">Menu</span>
            </>
          )}
        </button>

        <ul className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
          <li
            className={navItemClass(0)}
            onClick={() => {
              showAbout();
              closeMenu();
            }}
          >
            About Me
          </li>
          <li
            className={navItemClass(1)}
            onClick={() => {
              showProjects();
              closeMenu();
            }}
          >
            Portfolio
          </li>
          <li
            className={navItemClass(2)}
            onClick={() => {
              showResume();
              closeMenu();
            }}
          >
            Resume
          </li>
          <li
            className={navItemClass(3)}
            onClick={() => {
              showSkills();
              closeMenu();
            }}
          >
            Skills
          </li>
          <li
            className={navItemClass(4)}
            onClick={() => {
              showContact();
              closeMenu();
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

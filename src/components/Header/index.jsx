import React, { useState } from "react";
import "./header.css";

const Header = ({
  currentPage,
  showAbout,
  showProjects,
  showResume,
  showContact,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass = (index, extra = "") =>
    `${extra} header-ul-li${index === currentPage ? "active" : ""}`.trim();
  
  const handleMenu = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="container-fluidheader-background">
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
        <li className={navItemClass(3)} onClick={showContact}>
          Contact
        </li>
      </ul>

      {/* Mobile Nav */}
      <nav className="navBar">
        <button onClick={handleMenu} aria-label="Toggle navigation">
            {/* No FontAwesome dependency: pure text icon */}
          <span className="hamburger">{menuOpen ? "✕" : "☰"}</span>
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>

        <ul className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
          <li
            className={navItemClass(0, "menustyles")}
            onClick={() => {
              showAbout();
              closeMenu();
            }}
          >
            About Me
          </li>
          <li
            className={navItemClass(1, "menustyles")}
            onClick={() => {
              showProjects();
              closeMenu();
            }}
          >
            Portfolio
          </li>
          <li
            className={navItemClass(2, "menustyles")}
            onClick={() => {
              showResume();
              closeMenu();
            }}
          >
            Resume
          </li>
          <li
            className={navItemClass(3, "menustyles")}
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

import React, { useState } from "react";
import './header.css'

const Header = ({ showAbout, showProjects, showContact }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(prev => !prev)
      }
      
      const closeMenu = () => {
        setMenuOpen(false)
      }

    return (
        <div className="container-fluid d-flex justify-content-between header-background">
            <div className="name-header">
                <h2 className='first-name'></h2><h2 className="last-name"></h2>
            </div>
            <h2 className="title">Web Developer</h2>
            <ul className="header-ul">
                <li className="header-ul-li" onClick={showAbout}>About</li>
                <li className="header-ul-li" onClick={showProjects}>Projects</li>
                <li className="header-ul-li" onClick={showContact}>Contact Me</li>
            </ul>

            <nav className="navBar">
                <button onClick={handleMenu}>{menuOpen ? <i className="fa-solid fa-x header-icons" style={{color: '#000'}}></i> : <i className="fa-solid fa-bars header-icons"></i>}</button>
                <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
                    <li className="header-ul-li menustyles" onClick={() => {showAbout(); closeMenu()}}>About</li>
                    <li className="header-ul-li menustyles" onClick={() => {showProjects(); closeMenu()}}>Projects</li>
                    <li className="header-ul-li menustyles" onClick={() => {showContact(); closeMenu()}}>Contact Me</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

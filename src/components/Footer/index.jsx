import React from 'react';
import './footer.css'

const Footer = () => {
  return ( 
    <div className='footer-container'>
        <ul className='footer-ul'>
          <li className='footer-li'><a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-twitter'></i></a>
          </li>
          <li className='footer-li'><a href='https://github.com' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-github'></i>
          </a></li>
          <li className='footer-li'><a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-linkedin'></i>
          </a></li>
          <li style={{display: 'flex', alignItems: 'center', cursor: 'auto'}} className='footer-li'>
            <a href= "mailto: 'oliverberto@gmail.com'" target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-envelope'></i>
            </a>
            <span className='hide' style={{ cursor: 'auto', fontSize: '20px', textDecoration: 'none', color: '#000', paddingLeft: '10px'}}>
              oliverberto@gmail.com
            </span>
          </li>
        </ul>
    </div>
  );
}

export default Footer;
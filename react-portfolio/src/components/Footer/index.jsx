import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return ( 
    <div className='footer'>
        <div>
            {" "}
            <InstagramIcon />{" "}
        </div>
        <p> &copy; </p>
    </div>
  );
}

export default Footer;
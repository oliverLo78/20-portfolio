import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return ( 
    <div className='footer'>
        <div>
            {" "}
            <LinkedInIcon />{" "}
            <GithubIcon />{" "}
        </div>
        <p> &copy; Oliver Lopez portfolio 2022 </p>
    </div>
  );
}

export default Footer;
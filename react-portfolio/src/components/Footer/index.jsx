import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter'


const Footer = () => {
  return ( 
    <div className='footer'>
        <div>
            {" "}
            <LinkedInIcon />{" "}
            <GithubIcon />{" "}
            <TwitterIcon />{" "}
        </div>
        <p> &copy; Oliver Lopez portfolio 2022 </p>
    </div>
  );
}

export default Footer;
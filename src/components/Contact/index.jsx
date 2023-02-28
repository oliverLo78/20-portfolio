import React, { useState, useRef } from 'react';
// import Contact from './components/utils';
import emailjs from '@emailjs/browser';
import  Modal from 'react-bootstrap/Modal';

// Here we import a helper function that will check if the email is valid
// import { checkMessage, validateEmail } from '../../utils/helpers';

 function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to false
  const [email, setEmail] = useState('false');

  const messageClose = () => setEmail(false); 
  const messageOpen = () => setEmail(true);
  
   const form = useRef();
  
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_yxf1m8j', 'template_92yyfem', form.current, 'RQhNo667QGSlWoBNi')
       .then((result) => {
         console.log(result.text);
         messageOpen();
         e.target.reset();
     }, (error) => {
         console.log(error.text);
     });
 }
  
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
      <h1 style={{ fontSize: '60px'}}>Contact Me!</h1>
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className='top-form'>
        <i className='fa-solid fa-envelope custom-envelope'></i>
        <div className='top-form-inputs'>
          <label className="form-label">Name:</label>
          <input type="text" name="user-name" className='text-inputs' required />
          <label className="form-label">Email Address:</label>
          <input type="email" name="user-email" className='text-inputs' required />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
      <label className='form-label'>Message</label>
      <textarea className='message-text' name="message" required />
        <input className='send-btn' type="submit" value="Send" />
         <label class="form-label">Message:</label>
      </div>
    </form>
    
    <Modal email={show} onHide={messageClose}>
      <Modal.Header closeButton style={{ backgroundColor: '#cbfff5', borderRadius: '5px' }}>
          <Modal.Title>Message Sent!</Modal.Title>
      </Modal.Header>
    </Modal>
    </div>
  </div>
  )
}

export default Contact;

/******************************************************************************************************************************* */
// import React from 'react';
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GithubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import EmailIcon from '@material-ui/icons/Email';

// // React
// import { 
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardTitle,
//   CardText
//  } from 'reactstrap';

// export default function Contact() {
// return (
// <div>
//   <Card inverse>
//     <CardImg
//       alt="Card image cap"
//       src="https://source.unsplash.com/random"
//       style={{
//         height: 750
//       }}
//       width="100%"
//     />
//     <CardImgOverlay>
//       <CardTitle tag="h5">
//       Have a question?
//       </CardTitle>
//       <CardText>
//         Let's get to know each other. How can I be useful to your service?
//         Please feel free to reach out to me. I would be delighted to answer all your questions or concerns.
//       </CardText>
//       <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/oliver-lopez78/')}/>
//       <EmailIcon onClick={() => window.open('mailto:oliverberto@gmail.com')}/>
//       <GithubIcon onClick={() => window.open('https://github.com/oliverLo78')}/>
//       <TwitterIcon />
//     </CardImgOverlay>
//   </Card>
// </div>
// );
//     }


    

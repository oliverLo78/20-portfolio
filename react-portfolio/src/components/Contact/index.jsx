import React, { useState } from 'react';
// import Contact from './components/utils';
import emailjs from '@emailjs/browser';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    }  else if (inputType === 'message') {
        setMessage(inputValue);
    } else {
      errorMessage('Message required...');
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // if (!validateEmail(email) || !name) {
    //   setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      // return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // if (!checkMessage(message)) {
    //   setErrorMessage(
    //     `Message required for your account: ${name}`
    //   );
    //   return;
    // }
    export const ContactUs = () => {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('service_yxf1m8j', 'template_92yyfem', form.current, 'RQhNo667QGSlWoBNi')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    alert(`Hello ${name}`);
    
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div class="col-md-6">
      <p>Hello {name}</p>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label class="form-label">Name:</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          class="form-control"
          placeholder="name"
        />
         <label class="form-label">Email Address:</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          class="form-control"
          placeholder="email"
        />
         <label class="form-label">Message:</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          class="form-control"
          placeholder="Add a Message here"
        />
        <button class="form-control" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

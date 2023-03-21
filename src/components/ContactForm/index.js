import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./style.css"

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
// TODO add .env file
    emailjs.sendForm(
        'service_zo7n8zv', 
        'template_3qonnuo', 
        form.current, 
        'qAGcWm6fIZZLN4Dsa')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form id='contactForm' ref={form} onSubmit={sendEmail}>
      <label>Your Name:</label>
      <input type="text" name="user_name" />
      <label>Your Email Address:</label>
      <input type="email" name="user_email"/>
      <label>What would you like to say?</label>
      <textarea name="message" />
      <input id='contactBtn' type="submit" value="Send" />
    </form>
  );
};

export default ContactForm

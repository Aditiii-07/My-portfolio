import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_eqm7syr', 'template_uwm1viq', form.current, 'SZ8jM1SIsEcD9hZNa')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again.');
        }
      );

    e.target.reset(); // Optional: clears the form
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify'; // Librería para sanitizar datos
import './ContactMe.css';

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sanitizeInput = (value: string): string => {
    // Usa DOMPurify para sanitizar valores
    return DOMPurify.sanitize(value.trim());
  };

  const validateEmail = (email: string): boolean => {
    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      // Extraer y sanitizar los datos del formulario
      const formData = new FormData(form.current);
      const name = sanitizeInput(formData.get('name') as string);
      const email = sanitizeInput(formData.get('email') as string);
      const message = sanitizeInput(formData.get('message') as string);

      // Validar el correo electrónico
      if (!validateEmail(email)) {
        alert('Invalid email address. Please enter a valid email.');
        return;
      }

      // Crear un objeto para enviar los datos sanitizados
      const sanitizedData = {
        name,
        email,
        message,
      };

      // Enviar los datos a EmailJS
      emailjs.send(
        'service_tnkfkzn',
        'template_rvfouoa',
        sanitizedData,
        'yspJpPQNACQxcaSAa'
      )
        .then((result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.error('Email error:', error.text);
          alert('Failed to send message.');
        });
    }
  };

  return (
    <section id="ContactMe" className="contact-me">
      <div className="contact-me-content">
        <h2>Contact Me</h2>
        <form ref={form} className="contact-me-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

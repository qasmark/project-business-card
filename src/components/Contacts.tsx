import React from 'react';
import ContactForm from './ContactForm';
import './Contacts.css';
const Contacts: React.FC = () => {
  return (
    <div className="contacts-container">
      <h1>Контакты</h1>
      <div className="contact-info"> {}
        <p>Email: info@example.com</p>
        <p>Телефон: +1234567890</p>
      </div>
      <p>Если у вас к нам вопросы, напишите нам</p>
      <ContactForm />
    </div>
  );
};

export default Contacts;
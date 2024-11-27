import React, { useState } from 'react';
import './ContactForm.css';
import { CheckCircle, XCircle } from 'react-feather';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {status === 'success' && (
        <div className="success-message">
          <CheckCircle size={20} /> Обращение отправлено!
        </div>
      )}
      {status === 'error' && (
        <div className="error-message">
          <XCircle size={20} /> Ошибка отправки. Попробуйте позже.
        </div>
      )}
      <div>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="message">Сообщение:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;
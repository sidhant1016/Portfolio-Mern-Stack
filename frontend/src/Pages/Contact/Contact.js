// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Import CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start animation on form submit

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(response.data);

      // Redirect to the home page after form submission
      navigate('/');
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false); // Stop animation after form submit
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={`slide-in ${isSubmitting ? 'pulse' : ''}`}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className={isSubmitting ? 'pulse' : ''}>Submit</button>
      </form>
      {responseMessage && <p className="fade-in">{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;

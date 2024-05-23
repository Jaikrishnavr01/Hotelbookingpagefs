import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comments) {
      toast.error("Please fill in all Contacts fields.");
      return;
    }

    const templateParams = {
      user_user: formData.name,
      user_email: formData.email,
      user_project: formData.comments
    };

    emailjs.send('service_4gdff7z', 'template_ykahacb', templateParams, 'hQUs42nt4uSkQXR4Y')
      .then((response) => {
        toast.success('Email sent successfully');
      })
      .catch((error) => {
        toast.error('Error sending email');
      });
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className='h1'>Contact Us</h1>
        <div className='row'>
          <div className='col'>
            <h5 className='h5'>Contact</h5>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <h3 className='h3'>123 Blissful Avenue Saravanampatti, Coimbatore, Tamilnadu-641035, India</h3>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <h3 className='h3'>+123 456 7890</h3>
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <h3 className='h3'>info@hresidency.com</h3>
            </div>
          </div>
          <div className='col'>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange}  />
              <br />
              <label>Email</label>
              <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} /> 
              <br />
              <label>Comments</label>
              <textarea className='textarea' name="comments" cols="30" rows="10" value={formData.comments} onChange={handleChange} ></textarea>
              <button className='button' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Contact;

import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { useState } from 'react';
import axios from 'axios';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
    };

    try {
      const response = await axios.post('http://localhost:5000/', userData);
      setMessage(response.data.message); // Handle success response
    } catch (error) {
      setMessage('Error: ' + error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
            Follow us on Instagram for more exclusive content.
        </p>
        <div className='footer-link-items'>
          <Link to='https://www.instagram.com/arena__pr/' target="_blank">
            <img src='/images/IG-arena_White copy.png' width={40} height={40} alt='IG Logo' /><br/>
          </Link>
          <Link to='https://www.instagram.com/arena__pr/' target="_blank">
            @arena__pr
          </Link>
        </div>
      </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <Link to='/contact-us'>CONTACT US</Link>
                    <Link to='/privacy-policy'>PRIVACY POLICY</Link>
                </div>
                <p>All Rights Reserved © 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import '../../App.css'
import ContactUsNorth from '../ContactUsNorth';
import ContactUsMiddle from '../ContactUsMiddle';
import Footer from '../Footer';

function ContactUs() {
    window.scrollTo(0, 0);
    return (
        <>
          <ContactUsNorth />
          <ContactUsMiddle />
          <Footer />
        </>
    );
}

export default ContactUs
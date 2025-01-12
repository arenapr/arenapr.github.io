import React from 'react'
import '../../App.css'
import ContactUsNorth from '../ContactUsNorth';
import HomeSouth from '../HomeSouth';
import Footer from '../Footer';

function ContactUs() {
    window.scrollTo(0, 0);
    return (
        <>
          <ContactUsNorth />
          <HomeSouth />
          <Footer />
        </>
    );
}

export default ContactUs
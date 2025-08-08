import React from 'react'
import '../../../App.css'
import HilveniaBlogNorth from '../../HilveniaBlogNorth'
import HilveniaBlogMiddle from '../../HilveniaBlogMiddle'
import Footer from '../../Footer';

function HilveniaBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <HilveniaBlogNorth />
      <HilveniaBlogMiddle />
      <Footer />
    </>
  )
}

export default HilveniaBlog
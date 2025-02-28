import React from 'react'
import '../../../App.css'
import SergioBlogNorth from '../../SergioBlogNorth'
import SergioBlogMiddle from '../../SergioBlogMiddle'
import Footer from '../../Footer';

function SergioEstradaBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <SergioBlogNorth />
      <SergioBlogMiddle />
      <Footer />
    </>
  )
}

export default SergioEstradaBlog
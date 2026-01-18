import React from 'react'
import '../../../App.css'
import AndyCastanedaBlogNorth from '../../AndyCastanedaBlogNorth'
import AndyCastanedaBlogMiddle from '../../AndyCastanedaBlogMiddle'
import Footer from '../../Footer';

function AndyCastanedaBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <AndyCastanedaBlogNorth />
      <AndyCastanedaBlogMiddle />
      <Footer />
    </>
  )
}

export default AndyCastanedaBlog
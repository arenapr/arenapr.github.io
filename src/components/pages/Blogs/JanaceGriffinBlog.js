import React from 'react'
import '../../../App.css'
import JanaceBlogNorth from '../../JanaceBlogNorth'
import JanaceBlogMiddle from '../../JanaceBlogMiddle'
import Footer from '../../Footer';

function JanaceGriffinBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <JanaceBlogNorth />
      <JanaceBlogMiddle />
      <Footer />
    </>
  )
}

export default JanaceGriffinBlog
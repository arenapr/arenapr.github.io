import React from 'react'
import '../../../App.css'
import NathBlogNorth from '../../NathBlogNorth'
import NathBlogMiddle from '../../NathBlogMiddle'
import Footer from '../../Footer';

function NathMoraBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <NathBlogNorth />
      <NathBlogMiddle />
      <Footer />
    </>
  )
}

export default NathMoraBlog
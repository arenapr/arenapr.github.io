import React from 'react'
import '../../../App.css'
import JackieHeraldBlogNorth from '../../JackieHeraldBlogNorth'
import JackieHeraldBlogMiddle from '../../JackieHeraldBlogMiddle'
import Footer from '../../Footer';

function JackieHeraldBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <JackieHeraldBlogNorth />
      <JackieHeraldBlogMiddle />
      <Footer />
    </>
  )
}

export default JackieHeraldBlog
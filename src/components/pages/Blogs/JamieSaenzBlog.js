import React from 'react'
import '../../../App.css'
import JamieSaenzBlogNorth from '../../JamieSaenzBlogNorth'
import JamieSaenzBlogMiddle from '../../JamieSaenzBlogMiddle'
import Footer from '../../Footer';

function JamieSaenzBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <JamieSaenzBlogNorth />
      <JamieSaenzBlogMiddle />
      <Footer />
    </>
  )
}

export default JamieSaenzBlog
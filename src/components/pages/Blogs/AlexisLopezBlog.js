import React from 'react'
import '../../../App.css'
import AlexisBlogNorth from '../../AlexisBlogNorth'
import AlexisBlogMiddle from '../../AlexisBlogMiddle'
import Footer from '../../Footer';

function AlexisLopezBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');

  window.scrollTo(0, 0);
  return (
    <>
      <AlexisBlogNorth />
      <AlexisBlogMiddle />
      <Footer />
    </>
  )
}

export default AlexisLopezBlog
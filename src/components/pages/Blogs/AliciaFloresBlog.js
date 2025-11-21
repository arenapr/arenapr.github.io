import React from 'react'
import '../../../App.css'
import AliciaFloresBlogNorth from '../../AliciaFloresBlogNorth'
import AliciaFloresBlogMiddle from '../../AliciaFloresBlogMiddle'
import Footer from '../../Footer';

function AliciaFloresBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <AliciaFloresBlogNorth />
      <AliciaFloresBlogMiddle />
      <Footer />
    </>
  )
}

export default AliciaFloresBlog
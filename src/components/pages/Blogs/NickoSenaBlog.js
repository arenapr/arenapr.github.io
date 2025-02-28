import React from 'react'
import '../../../App.css'
import NickoBlogNorth from '../../NickoBlogNorth'
import NickoBlogMiddle from '../../NickoBlogMiddle'
import Footer from '../../Footer';

function NickoSenaBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <NickoBlogNorth />
      <NickoBlogMiddle />
      <Footer />
    </>
  )
}

export default NickoSenaBlog
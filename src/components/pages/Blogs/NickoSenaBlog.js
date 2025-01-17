import React from 'react'
import '../../../App.css'
import NickoBlogNorth from '../../NickoBlogNorth'
import NickoBlogMiddle from '../../NickoBlogMiddle'
import Footer from '../../Footer';

function NickoSenaBlog() {
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
import React from 'react'
import '../../../App.css'
import SergioBlogNorth from '../../SergioBlogNorth'
import SergioBlogMiddle from '../../SergioBlogMiddle'
import Footer from '../../Footer';

function SergioEstradaBlog() {
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
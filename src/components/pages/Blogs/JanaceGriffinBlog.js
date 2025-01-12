import React from 'react'
import '../../../App.css'
import JanaceBlogNorth from '../../JanaceBlogNorth'
import JanaceBlogMiddle from '../../JanaceBlogMiddle'
import Footer from '../../Footer';

function JanaceGriffinBlog() {
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
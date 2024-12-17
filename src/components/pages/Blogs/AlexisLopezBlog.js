import React from 'react'
import '../../../App.css'
import AlexisBlogNorth from '../../AlexisBlogNorth'
import AlexisBlogMiddle from '../../AlexisBlogMiddle'
import Footer from '../../Footer';

function AlexisLopezBlog() {
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
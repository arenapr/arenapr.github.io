import React from 'react'
import '../../App.css'
import BlogNorth from '../BlogNorth';
import BlogMiddle from '../BlogMiddle';
import Footer from '../Footer';

function Blog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
    window.scrollTo(0, 0);
    return (
        <>
          <BlogNorth />
          <BlogMiddle />
          <Footer />
        </>
    );
}

export default Blog
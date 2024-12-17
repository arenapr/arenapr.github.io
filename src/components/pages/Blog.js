import React from 'react'
import '../../App.css'
import BlogNorth from '../BlogNorth';
import BlogMiddle from '../BlogMiddle';
import Footer from '../Footer';

function Blog() {
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
import '../../../App.css'
import PriscillaMarquezBlogComponents from '../../PriscillaMarquezBlogComponents'
import Footer from '../../Footer';

function PriscillaMarquezBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <PriscillaMarquezBlogComponents />
      <Footer />
    </>
  )
}

export default PriscillaMarquezBlog
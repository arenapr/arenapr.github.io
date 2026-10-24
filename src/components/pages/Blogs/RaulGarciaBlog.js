import '../../../App.css'
import RaulGarciaBlogComponents from '../../RaulGarciaBlogComponents'
import Footer from '../../Footer';

function RaulGarciaBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <RaulGarciaBlogComponents />
      <Footer />
    </>
  )
}

export default RaulGarciaBlog
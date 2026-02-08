import '../../../App.css'
import DanielaCarrancoBlogComponents from '../../DanielaCarrancoBlogComponents'
import Footer from '../../Footer';

function DanielaCarrancoBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <DanielaCarrancoBlogComponents />
      <Footer />
    </>
  )
}

export default DanielaCarrancoBlog
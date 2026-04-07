import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import SergioEstradaBlog from './components/pages/Blogs/SergioEstradaBlog';
import NickoSenaBlog from './components/pages/Blogs/NickoSenaBlog';
import NathMoraBlog from './components/pages/Blogs/NathMoraBlog';
import HilveniaBlog from './components/pages/Blogs/HilveniaBlog';
import JackieHeraldBlog from './components/pages/Blogs/JackieHeraldBlog';
import AliciaFloresBlog from './components/pages/Blogs/AliciaFloresBlog';
import JamieSaenzBlog from './components/pages/Blogs/JamieSaenzBlog';
import AndyCastanedaBlog from './components/pages/Blogs/AndyCastanedaBlog';
import DanielaCarrancoBlog from './components/pages/Blogs/DanielaCarrancoBlog';
import DamarisAldereteBlog from './components/pages/Blogs/DamarisAldereteBlog';
import OriginStoryBlog from './components/pages/Blogs/OriginStoryBlog';
import PriscillaMarquezBlog from './components/pages/Blogs/PriscillaMarquezBlog';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' Component={About} />
        <Route path='/blog' Component={Blog} />
        <Route path='/contact-us' Component={ContactUs}/>
        <Route path='/privacy-policy' Component={PrivacyPolicy} />
        <Route path='blog/origin-story-blog' Component={OriginStoryBlog} />
        <Route path='blog/sergio-estrada-blog' Component={SergioEstradaBlog} />
        <Route path='blog/nicko-sena-blog' Component={NickoSenaBlog} />
        <Route path='blog/nath-mora-blog' Component={NathMoraBlog} />
        <Route path='blog/hilvenia-blog' Component={HilveniaBlog} />
        <Route path='blog/jackie-herald-blog' Component={JackieHeraldBlog} />
        <Route path='blog/alicia-flores-blog' Component={AliciaFloresBlog} />
        <Route path='blog/jamie-saenz-blog' Component={JamieSaenzBlog} />
        <Route path='blog/andy-castaneda-blog' Component={AndyCastanedaBlog} />
        <Route path='blog/daniela-carranco-blog' Component={DanielaCarrancoBlog} />
        <Route path='blog/damaris-alderete-blog' Component={DamarisAldereteBlog} />
        <Route path='blog/priscilla-marquez-blog' Component={PriscillaMarquezBlog} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import AlexisLopezBlog from './components/pages/Blogs/AlexisLopezBlog';
import SergioEstradaBlog from './components/pages/Blogs/SergioEstradaBlog';
import JanaceGriffinBlog from './components/pages/Blogs/JanaceGriffinBlog';
import NickoSenaBlog from './components/pages/Blogs/NickoSenaBlog';
import NathMoraBlog from './components/pages/Blogs/NathMoraBlog';
import HilveniaBlog from './components/pages/Blogs/HilveniaBlog';
import JackieHeraldBlog from './components/pages/Blogs/JackieHeraldBlog';
import AliciaFloresBlog from './components/pages/Blogs/AliciaFloresBlog';
import JamieSaenzBlog from './components/pages/Blogs/JamieSaenzBlog';

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
        <Route path='blog/alexis-lopez-blog' Component={AlexisLopezBlog} />
        <Route path='blog/sergio-estrada-blog' Component={SergioEstradaBlog} />
        <Route path='blog/janace-griffin-blog' Component={JanaceGriffinBlog} />
        <Route path='blog/nicko-sena-blog' Component={NickoSenaBlog} />
        <Route path='blog/nath-mora-blog' Component={NathMoraBlog} />
        <Route path='blog/hilvenia-blog' Component={HilveniaBlog} />
        <Route path='blog/jackie-herald-blog' Component={JackieHeraldBlog} />
        <Route path='blog/alicia-flores-blog' Component={AliciaFloresBlog} />
        <Route path='blog/jamie-saenz-blog' Component={JamieSaenzBlog} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

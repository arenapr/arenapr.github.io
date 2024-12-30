import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import AlexisLopezBlog from './components/pages/Blogs/AlexisLopezBlog';
import SergioEstradaBlog from './components/pages/Blogs/SergioEstradaBlog';

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
      </Routes>
    </Router>
    </>
  );
}

export default App;

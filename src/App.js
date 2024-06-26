import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/scrollUp';
import Portfolio from './components/work/portfolio';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App

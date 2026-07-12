import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
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
import CustomCursor from './components/custom-cursor/custom-cursor';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }
    const btn = e?.currentTarget || document.querySelector('[aria-label="Toggle theme"]');
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }
    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.startViewTransition(() => {
      flushSync(() => setTheme(newTheme));
    });
  };

  return (
    <>
      <CustomCursor />
      <Header toggleTheme={toggleTheme} theme={theme} />

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

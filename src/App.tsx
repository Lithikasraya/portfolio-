import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleBtnClass =
    'fixed top-4 right-4 z-50 px-4 py-2 rounded-lg border transition-colors duration-300 bg-white text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 shadow';

  return (
    <div className={`min-h-screen bg-white dark:bg-black transition-colors duration-300`}>
      <button
        className={toggleBtnClass}
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

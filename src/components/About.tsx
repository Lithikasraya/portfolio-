import React, { useState, useEffect } from 'react';

export default function About() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle button styles
  const toggleBtnClass =
    'px-4 py-2 rounded-lg border transition-colors duration-300 bg-white text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700';

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-purple-700 dark:text-purple-300">About Me</span>
        </h2>
        {/* Dark mode toggle button removed as requested */}
        <div className="bg-white dark:bg-black rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a passionate developer on a journey to master the art of creating impactful digital experiences.
            With a strong foundation in frontend technologies and a growing interest in machine learning,
            I love bringing ideas to life through clean, efficient code. Every project is an opportunity to learn,
            grow, and push the boundaries of what's possible. I'm constantly exploring new technologies and
            best practices to stay at the forefront of the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
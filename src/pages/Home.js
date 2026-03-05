import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Writing from '../components/Writing';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Writing />
      <Contact />
    </main>
  );
};

export default Home;

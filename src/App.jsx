import React, { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CinematicScrollingHeading from './components/CinematicScrollingHeading'
import ProjectsShowcase from './components/ProjectsShowcase'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <About />
          <CinematicScrollingHeading />
          <ProjectsShowcase />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App

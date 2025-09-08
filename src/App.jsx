import React from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import AboutSection from './Components/About'
import WorkSection from './Components/Worksection'
import ContactSection from './Components/Contactsection'

function App() {


  return (
    <>
      <Navigation/>
      <Hero/>
      <AboutSection/>
      <WorkSection/>
      <ContactSection/>
    </>
  )
}

export default App

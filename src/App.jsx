import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Team from './components/Teams/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import MySkills from './components/MySkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import 'animate.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      <Experience></Experience> 
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App

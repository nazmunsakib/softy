import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import MySkills from './components/MySkills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <MySkills></MySkills>
      <Footer></Footer>
    </div>
  )
}

export default App

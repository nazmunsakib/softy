import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default App

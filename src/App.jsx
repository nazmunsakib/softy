import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

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

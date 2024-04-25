import { useEffect, useState } from 'react'
import './App.scss'
import { Section } from './utils/enums/Section'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import About from './views/about/About'
import Journey from './views/journey/Journey'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './views/contact/Contact'
import Projects from './views/projects/Projects'
import Snackbar from './components/snackbar/Snackbar'
import Footer from './components/footer/Footer'

function App() {


  AOS.init();

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
      <Snackbar />
    </>
  )
}

export default App

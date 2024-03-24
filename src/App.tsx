import { useState } from 'react'
import './App.css'
import { Section } from './utils/enums/Section'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import About from './views/about/About'
import Journey from './views/journey/Journey'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Home);

  AOS.init();
  return (
    <body>
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <Home />
      <About />
      <Journey />

    </body>
  )
}

export default App

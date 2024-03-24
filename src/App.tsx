import { useState } from 'react'
import './App.css'
import { Section } from './utils/enums/Section'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import About from './views/about/About'

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Home);

  return (
    <body>
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <Home />
      <About />
    </body>
  )
}

export default App

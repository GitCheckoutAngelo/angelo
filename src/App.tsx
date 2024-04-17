import { useEffect, useState } from 'react'
import './App.css'
import { Section } from './utils/enums/Section'
import Navbar from './components/navbar/Navbar'
import Home from './views/home/Home'
import About from './views/about/About'
import Journey from './views/journey/Journey'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useInView } from 'react-intersection-observer'
import Contact from './views/contact/Contact'
import Projects from './views/projects/Projects'
import Snackbar from './components/snackbar/Snackbar'
import Footer from './components/footer/Footer'

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Home);
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: journeyRef, inView: journeyInView } = useInView({ threshold: 0.2 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) { setCurrentSection(Section.Home); }
    else if (aboutInView) { setCurrentSection(Section.About); }
    else if (journeyInView) { setCurrentSection(Section.Journey); }
    else if (projectsInView) { setCurrentSection(Section.Projects); }
    else if (contactInView) { setCurrentSection(Section.Contact); }
  }, [homeInView, aboutInView, journeyInView, projectsInView, contactInView]);

  AOS.init();

  return (
    <>
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      <Home sectionRef={homeRef}/>
      <About sectionRef={aboutRef} />
      <Journey sectionRef={journeyRef}/>
      <Projects sectionRef={projectsRef}/>
      <Contact sectionRef={contactRef}/>
      <Footer />
      <Snackbar/>
    </>
  )
}

export default App

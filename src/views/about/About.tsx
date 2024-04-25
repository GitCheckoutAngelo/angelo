import { useState } from 'react'
import './About.scss'
import aboutMeSrc from '../../assets/about.jpg'
import interviews from '../../assets/interviews.gif'
import { useSectionInView } from '../../contexts/SectionInViewContext'
import { Section } from '../../utils/enums/Section'
import { useSectionRef } from '../../contexts/SectionRefContext'

const About = () => {
  const [hover, setHover] = useState<boolean>(false);

  const sectionRef = useSectionRef();
  const sectionInView = useSectionInView();

  return (
    <section className="about" id="about" ref={sectionRef?.get(Section.About)}>
        <div className="in-view" ref={sectionInView?.getRef(Section.About)} />
        <h2 className="heading">About <span>Me</span></h2>
        <div className="avatar" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={aboutMeSrc} className="picture" />
            <img src={hover ? interviews : aboutMeSrc} className="clip"/>
            <span className="spinner"></span>
        </div>
        <div className="content">
            <h3>Aspiring Software Engineer!</h3>
            <div className="text">
              <p>Hey there! I'm <span>Angelo Rojas Tangonan</span>, a budding software engineer driven by a love for problem-solving and the wonders of technology. While I hail from the Philippines, Aotearoa New Zealand has been my home for most of my life.</p>
              <p>Ever since I was young, I've been fascinated by the way technology influences our world, which naturally led me to pursue a career in software engineering. My particular focus lies in web development, with a strong interest in full-stack development.</p>
              <p>Beyond software engineering, I'm a passionate advocate for gender diversity in STEM. Through volunteering and mentorship, I work to empower underrepresented groups, to help foster a more inclusive environment for all to thrive. I believe diversity drives innovation and I strive to contribute to a future where the tech industry reflects our global diversity.</p>
              <p>Kindly note that this portfolio website is still being developed. Thanks for your patience! 😊</p>
            </div>
            <div className="btn-box btns">
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default About
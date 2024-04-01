import { LegacyRef, useState } from 'react'
import './About.css'
import aboutMeSrc from '../../assets/about.jpg'
import interviews from '../../assets/interviews.gif'

interface AboutProps {
  sectionRef: LegacyRef<HTMLElement>,
}

const About = ({ sectionRef }: AboutProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <section className="about" id="about" ref={sectionRef}>
        <h2 className="heading">About <span>Me</span></h2>
        <div className="about-img" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={aboutMeSrc} className="avatar" />
            <img src={hover ? interviews : aboutMeSrc} className="clip"/>
            <span className="circle-spin"></span>
        </div>
        <div className="about-content">
            <h3>Aspiring Software Engineer!</h3>
            <p>Hey there! I'm <span>Angelo Rojas Tangonan</span>, a budding software engineer driven by a love for problem-solving and the wonders of technology. While I hail from the Philippines, Aotearoa New Zealand has been my home for most of my life.</p>
            <p>Ever since I was young, I've been fascinated by the way technology influences our world, which naturally led me to pursue a career in software engineering. My particular focus lies in web development, with a strong interest in full-stack development.</p>

            <p>Beyond software engineering, I'm a passionate advocate for gender diversity in STEM. Through volunteering and mentorship, I work to empower underrepresented groups, to help foster a more inclusive environment for all to thrive. I believe diversity drives innovation and I strive to contribute to a future where the tech industry reflects our global diversity.</p>
            <p>Kindly note that this portfolio website is still being developed. Thanks for your patience! 😊</p>
            <div className="btn-box btns">
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default About
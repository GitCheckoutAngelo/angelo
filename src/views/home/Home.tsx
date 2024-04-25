import { LegacyRef } from 'react'
import './Home.scss'

interface HomeProps {
  sectionRef: LegacyRef<HTMLElement>,
}

const Home = ({ sectionRef }: HomeProps) => {
  return (
    <section className="home" id="home" ref={sectionRef}>
      <div className="content">
        <h1>Angelo Tangonan</h1>
        <div className="text-animate">
          <h3>Software Engineer</h3>
        </div>
        <p>Step into my world of coding where I bring ideas to life. As a student eager to learn, I'm excited to share my journey and projects with you. Let's explore together!</p>

        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="#contact" className="btn">Let's Chat</a>
        </div>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/atan958/"><i className='bx bxl-linkedin' /></a>
        <a href="https://github.com/gitCheckoutAngelo"><i className='bx bxl-github' /></a>
        <a href="https://www.youtube.com/channel/UCkUr-Pm-3baqWrIILajSnEg"><i className='bx bxl-youtube' /></a>
      </div>
      <div className="home-img-overlay overlay"/>
    </section>
  )
}

export default Home
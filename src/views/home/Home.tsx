import { LegacyRef } from 'react'
import './Home.css'

interface HomeProps {
  sectionRef: LegacyRef<HTMLElement>,
}

const Home = ({ sectionRef }: HomeProps) => {
  return (
    <section className="home" id="home" ref={sectionRef}>
      <div className="home-content">
        <h1>Hi, I'm <span>Angelo</span></h1>
        <div className="text-animate">
          <h3>Software Engineer</h3>          
        </div>
        <p>Step into my world of coding where I bring ideas to life. As a student eager to learn, I'm excited to share my journey and projects with you. Let's explore together!</p>

        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="#" className="btn">Let's Chat</a>
        </div>
      </div>

      <div className="home-sci">
        <a href="#"><i className='bx bxl-microsoft'/></a>
        <a href="https://github.com/gitCheckoutAngelo"><i className='bx bxl-github'/></a>
        <a href="https://www.linkedin.com/in/atan958/"><i className='bx bxl-linkedin'/></a>
      </div>
      <div className="home-img-overlay"></div>
    </section>
  )
}

export default Home
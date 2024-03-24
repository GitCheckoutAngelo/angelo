import {  } from 'react'
import './About.css'
import aboutMeSrc from '../../assets/about.jpg'

const About = () => {
  return (
    <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>
        <div className="about-img">
            <img src={aboutMeSrc} alt="" />
            <span className="circle-spin"></span>
        </div>
        <div className="about-content">
            <h3>Aspiring Software Engineer!</h3>
            <p>Hey there! I'm <span>Angelo Rojas Tangonan</span>, a budding software engineer fueled by a passion for problem-solving and technology. While I hail from the Philippines, Aotearoa New Zealand has been my home for most of my life.</p>
            <p>From a young age, I've been captivated by the way technology influences our world, which naturally led me to pursue a career in software engineering. Whether I'm diving into code or tackling intricate puzzles, I thrive on challenges and the opportunity to innovate.</p>
            <p>Beyond the digital realm, I'm an explorer at heart. I find joy in venturing into new territories, immersing myself in diverse communities, and embracing the richness of different cultures. For me, life is an adventure meant to be savored to the fullest.</p>
            <p>Kindly note that this portfolio website is still being developed. Thanks for your patience! 😊</p>
            <div className="btn-box btns">
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default About
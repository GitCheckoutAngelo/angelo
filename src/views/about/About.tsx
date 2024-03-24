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
            <h3>Software Engineer!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta! Nihil dolores numquam repudiandae totam eum accusamus in optio voluptatibus illo doloremque delectus voluptatem eligendi labore ipsam aliquid, esse ullam.</p>
            <div className="btn-box btns">
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default About
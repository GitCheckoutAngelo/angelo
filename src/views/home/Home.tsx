import {  } from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Angelo</span></h1>
        <div className="text-animate">
          <h3>Software Engineeer</h3>          
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro placeat aut fuga quisquam ducimus, asperiores omnis perspiciatis adipisci harum similique quasi eum accusantium nisi ab aliquid hic at? Ipsa, nulla?</p>

        <div className="btn-box">
          <a href="#" className="btn">Hire Me</a>
          <a href="#" className="btn">Let's Chat</a>
        </div>
      </div>

      <div className="home-sci">
        <a href="#"><i className='bx bxl-microsoft'/></a>
        <a href="#"><i className='bx bxl-github'/></a>
        <a href="#"><i className='bx bxl-linkedin'/></a>
      </div>
      <div className="home-img-overlay"></div>
    </section>
  )
}

export default Home
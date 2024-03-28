import { LegacyRef } from 'react'
import './Projects.css'

// import robogalsSrc from '../../assets/robogals.jpg'

interface ProjectsProps {
    sectionRef: LegacyRef<HTMLElement>,
}
  

const item = {
    imageSrc: "",
    title: "",
    subtitle: "",
    description: "",
};

const Projects = ({ sectionRef }: ProjectsProps) => {

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <h2 className="heading">My <span>Projects</span></h2>
            <div className="row">
                <div className="column">
                   
                </div>
            </div>
        </section>
    )
}

export default Projects
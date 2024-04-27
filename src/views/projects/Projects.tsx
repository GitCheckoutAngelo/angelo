import './Projects.scss'
import { useSectionInView } from '../../contexts/SectionInViewContext'
import { useSectionRef } from '../../contexts/SectionRefContext'
import { Section } from '../../utils/enums/Section'
import { 
    hobbyProjects, 
    learningToolProjects, 
    researchAndDevelopmentProjects 
} from '../../utils/data/projects'
import ProjectItemData from '../../utils/types/ProjectItemData'
import ProjectItem from './components/project-item/ProjectItem'

const Projects = () => {
    const sectionRef = useSectionRef();
    const sectionInView = useSectionInView();

    const renderProjects = (projectItems: ProjectItemData[]) => {
        return projectItems.map(item => <ProjectItem key={`${item.title} - ${item.subtitle}`} item={item}/>);
    }

    return (
        <section className="projects" id="projects" ref={sectionRef?.get(Section.Projects)}>
            <div className="in-view" ref={sectionInView?.getRef(Section.Projects)} />
            <h2 className="heading">My <span>Projects</span></h2>

            <div className="item-group left">
                <div className="title">
                    <i className="bx bxs-book"></i>
                    <h3>Learning Tools</h3>
                </div>
                <div className="list">
                    {renderProjects(learningToolProjects)}
                </div>
            </div>

            <div className="item-group right">
                <div className="title">
                    <i className="bx bxs-file-find"></i>
                    <h3>Research & Development</h3>
                </div>
                <div className="list">
                    {renderProjects(researchAndDevelopmentProjects)}
                </div>
            </div>

            <div className="item-group left">
                <div className="title">
                    <i className="bx bxs-tennis-ball"></i>
                    <h3>Hobbies</h3>
                </div>
                <div className="list">
                    {renderProjects(hobbyProjects)}
                </div>
            </div>

        </section>
    )
}

export default Projects
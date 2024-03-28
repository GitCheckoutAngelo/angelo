import { LegacyRef, useState } from 'react'
import './Projects.css'

import geoquestClipSrc from '../../assets/projects/geoquest.gif';
import geoquestSrc from'../../assets/projects/geoquest.png';
import qlcsClipSrc from '../../assets/projects/qlcs.gif';
import qlcsSrc from '../../assets/projects/qlcs.png';
import fabricConnectorSrc from '../../assets/projects/fabric-connector.png';
import mediaLibrarySrc from '../../assets/projects/media-library.png';
import baddyMatchmakerSrc from '../../assets/projects/baddy-matchmaker.png';
import investmentsTrackerSrc from '../../assets/projects/investments-tracker.png';

type ProjectItem = {
    clip: string | undefined,
    thumbnail: string,
    title: string,
    subtitle: string,
    description: string,
    externalLink: string | undefined,
    date: string,
}

const learningTools: ProjectItem[] = [
    {
        clip: qlcsClipSrc,
        thumbnail: qlcsSrc,
        title: "Questions on Learners' Code",
        subtitle: "React JS, TypeScript, Python Flask, Firebase, Azure",
        description: "Questions on Learners' Code is a learning tool designed for introductory programming students. By analyzing students' Python code, it automatically generates implementation-specific questions, to help foster a deeper understanding of key programming concepts.",
        externalLink: "https://github.com/GitCheckoutAngelo/QuestionsOnLearnersCode",
        date: "Oct 2023",
    },
    {
        clip: geoquestClipSrc,
        thumbnail: geoquestSrc,
        title: "GeoQuest",
        subtitle: "Next JS, TypeScript",
        description: "Inspired by the popular game GeoGuessr, GeoQuest is an interactive and educational learning tool for students to enhance their geographical knowledge.",
        externalLink: "https://github.com/GitCheckoutAngelo/GeoQuest",
        date: "Jun 2023",
    },
];

const researchAndDevelopment: ProjectItem[] = [
    {
        clip: undefined,
        thumbnail: fabricConnectorSrc,
        title: "Microsoft Fabric Data Connector",
        subtitle: "C#, ASP.NET Core, SQL, Azure, Microsoft Fabric",
        description: "The Microsoft Fabric Data Connector allows Beca's BEYON platform to connect to a wide range of data sources using Microsoft Fabric technology. It uses Power BI Semantic Models to sync data and update in real-time, ensuring scalable and efficient connectivity.",
        externalLink: undefined,
        date: "Feb 2024",
    },
    {
        clip: undefined,
        thumbnail: mediaLibrarySrc,
        title: "Media Library",
        subtitle: "C#, ASP.NET Core, SQL, Cloudflare",
        description: "Media Library is a cloud-based solution for storing and managing cinema assets such as images and movie trailers. By utilizing Cloudflare web services, it ensures secure storage and easy access for efficient asset management.",
        externalLink: undefined,
        date: "Feb 2023",
    }
];

const hobbies: ProjectItem[] = [
    {
        clip: undefined,
        thumbnail: baddyMatchmakerSrc,
        title: "Baddy Matchmaker",
        subtitle: "C#, ASP.NET Core, EF Core, SQL",
        description: "A web API to make setting up badminton games easy for you and your friends, family, or local club.",
        externalLink: "https://github.com/GitCheckoutAngelo/BaddyMatchmaker",
        date: "Aug 2022",
    },
    {
        clip: undefined,
        thumbnail: investmentsTrackerSrc,
        title: "Investments Tracker",
        subtitle: "Not Yet Avaiable",
        description: "The Investments Tracker simplifies portfolio management by automatically tracking your stocks and shares.",
        externalLink: undefined,
        date: "TBD",
    }
];

interface ProjectProps {
    item: ProjectItem,
}

const Project = ({ item }: ProjectProps) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div className="item" data-aos="fade-up">
            <div className="box">
                <div className="content" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <div className="image">
                        <img src={item.thumbnail} className={`thumbnail ${item.clip ? 'hideable' : ''}`}/>
                        <img src={hover ? item.clip : undefined} className="clip" />
                    </div>
                    <div className="text">
                        <div className="year"><i className="bx bxs-calendar"></i>{item.date}</div>
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.description}</p>
                    </div>
                    <div className="link-box">
                        <div className="link">
                            {item.externalLink ? <i className="bx bx-link-external"/> : <i className="bx bx-lock-alt"/>}
                            <a href={item.externalLink}>{item.externalLink ? 'View Source Code' : 'Private Source Code'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ProjectsProps {
    sectionRef: LegacyRef<HTMLElement>,
}

const Projects = ({ sectionRef }: ProjectsProps) => {
    
    const renderProjects = (projectItems: ProjectItem[]) => {
        return projectItems.map(item => <Project item={item}/>);
    }

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <h2 className="heading">My <span>Projects</span></h2>

            <div className="item-group">
                <div className="title">
                    <i className="bx bxs-book"></i>
                    <h3>Learning Tools</h3>
                </div>
                <div className="box">
                    {renderProjects(learningTools)}
                </div>
            </div>

            <div className="item-group right">
                <div className="title">
                    <i className="bx bxs-file-find"></i>
                    <h3>Research & Development</h3>
                </div>
                <div className="box">
                    {renderProjects(researchAndDevelopment)}
                </div>
            </div>

            <div className="item-group">
                <div className="title">
                    <i className="bx bxs-tennis-ball"></i>
                    <h3>Hobbies</h3>
                </div>
                <div className="box">
                    {renderProjects(hobbies)}
                </div>
            </div>

        </section>
    )
}

export default Projects
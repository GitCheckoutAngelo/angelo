import { useState } from 'react'
import './ProjectItem.scss'
import ProjectItemData from '../../../../utils/types/ProjectItemData'

interface ProjectItemProps {
    item: ProjectItemData,
}

const ProjectItem = ({ item }: ProjectItemProps) => {
    const [hover, setHover] = useState<boolean>(false);

    const clip = hover ? item.clip : undefined;

    return (
        <div className="item" data-aos="fade-up">
            <div className="content" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="image">
                    {hover && <div className="loading lds-dual-ring"/>}
                    <img src={clip} className="clip" />
                    <img src={item.thumbnail} className={`thumbnail ${item.clip ? 'hideable' : ''}`} />
                </div>
                <div className="text">
                    <div className="year"><i className="bx bxs-calendar"></i>{item.date}</div>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                </div>
                <div className="link-box">
                    <div className="link">
                        {item.externalLink ? <i className="bx bx-link-external" /> : <i className="bx bx-lock-alt" />}
                        <a target="_blank" href={item.externalLink}>{item.externalLink ? 'View Source Code' : 'Private Source Code'}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem

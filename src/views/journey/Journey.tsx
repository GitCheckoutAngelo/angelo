import './Journey.scss'
import { useSectionInView } from '../../contexts/SectionInViewContext'
import { Section } from '../../utils/enums/Section'
import { useSectionRef } from '../../contexts/SectionRefContext'
import { educationJourney, experienceJourney, extracurricularJourney } from '../../utils/data/journey'
import JourneyItemData from '../../utils/types/JourneyItemData'

const Journey = () => {
    const sectionRef = useSectionRef();
    const sectionInView = useSectionInView();

    const renderItemGroup = (group: JourneyItemData[], startReversed: boolean) => {
        return group.map((item, index) => {
            // default is to have picture start from right-hand side (reverse will be left-hand side)
            const reverse = index % 2 == 0 != startReversed;
            const contentOrientation = reverse ? "reverse" : "default";

            return (
                <div key={`${item.title} - ${item.subtitle}`} className="item" data-aos={`fade-${reverse ? "left" : "right"}`}>
                    <div className={`content ${contentOrientation}`}>
                        {item.imageSrc && <div className="image">
                            <img src={item.imageSrc} />
                        </div>}
                        <div className="text">
                            <div className="year"><i className="bx bxs-calendar"></i>{item.date}</div>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <section className="journey" id="journey" ref={sectionRef?.get(Section.Journey)}>
            <div className="in-view" ref={sectionInView?.getRef(Section.Journey)} />
            <h2 className="heading">My <span>Journey</span></h2>

            <div className="item-group left" >
                <div className="title">
                    <i className="bx bxs-graduation"></i>
                    <h3>Education</h3>
                </div>
                <div className="timeline">
                    {renderItemGroup(educationJourney, true)}
                </div>
            </div>

            <div className="item-group right">
                <div className="title">
                    <i className="bx bxs-briefcase"></i>
                    <h3>Experience</h3>
                </div>
                <div className="timeline">
                    {renderItemGroup(experienceJourney, false)}
                </div>
            </div>

            <div className="item-group left">
                <div className="title">
                    <i className="bx bxs-star"></i>
                    <h3>Extra-curricular</h3>
                </div>
                <div className="timeline">
                    {renderItemGroup(extracurricularJourney, true)}
                </div>
            </div>

        </section>
    )
}

export default Journey
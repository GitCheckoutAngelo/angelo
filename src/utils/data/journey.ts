import JourneyItemData from "../types/JourneyItemData";
import robogalsSrc from '../../assets/robogals.jpg'
import becaSrc from '../../assets/beca.png'
import vistaSrc from '../../assets/vista-2.jpg'
import wdccSrc from '../../assets/wdcc.jpg'

const educationJourney: JourneyItemData[] = [
    {
        date: "Feb 2020 - present",
        title: "BE(Hons) in Software Engineering",
        subtitle: "The University of Auckland",
        description: "",
        imageSrc: undefined,
    }
];

const experienceJourney: JourneyItemData[] = [
    {
        date: "Nov 2023 - Feb 2024",
        title: "Software Engineer Intern",
        subtitle: "Beca",
        description: "At Beca, I led an R&D project that worked on integrating Microsoft Fabric into BEYON, our digital twin platform. This bold move aimed to revolutionize how we handle asset data within the platform, tapping into the powerful capabilities of Microsoft Fabric.",
        imageSrc: becaSrc,
    },
    {
        date: "Nov 2022 - Feb 2023",
        title: "Software Engineer Intern",
        subtitle: "Vista Entertainment Solutions",
        description: "During my time at Vista, I embarked on an exciting venture: exploring whether Cloudflare could rival more well-established cloud platforms like AWS or Azure. This proof of concept project was all about pushing boundaries and discovering new possibilities in the cloud technology landscape.",
        imageSrc: vistaSrc,
    }
];

const extracurricularJourney: JourneyItemData[] = [
    {
        date: "Mar 2022 - present",
        title: "Lead Volunteer",
        subtitle: "Robogals Auckland",
        description: "As the lead volunteer at Robogals Auckland, my goal is clear: to ignite passion for STEM in young minds and bridge the gender gap in the field. My job is more than just teaching robotics and technology; it is about sparking curiosity, breaking stereotypes, and empowering the next generation of engineers.",
        imageSrc: robogalsSrc,
    },
    {
        date: "Mar 2022 - Nov 2022",
        title: "Web Developer",
        subtitle: "Web Development and Consulting Club",
        description: "At WDCC, I immersed myself in cutting-edge web development, learning the latest technologies and best practices. Working on real projects with clients gave me hands-on experience and insight into the software engineering industry.",
        imageSrc: wdccSrc,
    }
];

export {
    educationJourney,
    experienceJourney,
    extracurricularJourney,
}
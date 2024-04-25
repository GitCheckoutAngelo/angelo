import ProjectItemData from "../types/ProjectItemData";
import geoquestClipSrc from '../../assets/projects/geoquest.gif'
import geoquestSrc from'../../assets/projects/geoquest.png'
import qlcsClipSrc from '../../assets/projects/qlcs.gif'
import qlcsSrc from '../../assets/projects/qlcs.png'
import fabricConnectorSrc from '../../assets/projects/fabric-connector.png'
import mediaLibrarySrc from '../../assets/projects/media-library.png'
import baddyMatchmakerSrc from '../../assets/projects/baddy-matchmaker.png'
import investmentsTrackerSrc from '../../assets/projects/investments-tracker.png'

const learningToolProjects: ProjectItemData[] = [
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

const researchAndDevelopmentProjects: ProjectItemData[] = [
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

const hobbyProjects: ProjectItemData[] = [
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

export { 
    learningToolProjects,
    researchAndDevelopmentProjects,
    hobbyProjects
}
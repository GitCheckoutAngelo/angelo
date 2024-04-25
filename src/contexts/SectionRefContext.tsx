import { createContext, useContext, useRef } from "react";
import { Section } from "../utils/enums/Section";

type SectionRefContextType = {
    get: (section: Section) => React.MutableRefObject<null>,
    scrollTo: (section: Section) => void,
};

const SectionContext = createContext<SectionRefContextType | null>(null);

interface SectionRefProviderProps {
    children: React.ReactNode
}

const SectionRefProvider = ({ children }: SectionRefProviderProps) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const journeyRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const get = (section: Section) => {
        switch (section) {
            case Section.Home:
                return homeRef;
            case Section.About:
                return aboutRef;
            case Section.Journey:
                return journeyRef;
            case Section.Projects:
                return projectsRef;
            case Section.Contact:
                return contactRef;
            default:
                return homeRef;
        }
    };

    const scrollTo = (section: Section) => {
        let sectionRef: React.MutableRefObject<null> | undefined = undefined;
        switch (section) {
            case Section.Home:
                sectionRef = homeRef;
                break;
            case Section.About:
                sectionRef = aboutRef;
                break;
            case Section.Journey:
                sectionRef = journeyRef;
                break;
            case Section.Projects:
                sectionRef = projectsRef;
                break;
            case Section.Contact:
                sectionRef = contactRef;
                break;
            default:
                sectionRef = homeRef;
                break;
        }
        if (!sectionRef || !sectionRef.current) return;

        (sectionRef.current as Element).scrollIntoView();
    };

    return (
        <SectionContext.Provider value={{ get, scrollTo }}>
            {children}
        </SectionContext.Provider>
    );
};

const useSectionRef = () => {
  return useContext(SectionContext);
};

export { SectionRefProvider, useSectionRef }
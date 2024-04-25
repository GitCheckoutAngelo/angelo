import { createContext, useContext } from "react";
import { Section } from "../utils/enums/Section";
import { useInView } from "react-intersection-observer";

type SectionInViewContextType = {
    getRef: (section: Section) => ((node?: Element | null | undefined) => void),
    checkInView: (section: Section) => boolean,
};

const SectionInViewContext = createContext<SectionInViewContextType | null>(null);

interface SectionInViewProviderProps {
    children: React.ReactNode
}

const SectionInViewProvider = ({ children }: SectionInViewProviderProps) => {
    const { ref: homeInViewRef, inView: homeInView } = useInView({ threshold: 0.5 });
    const { ref: aboutInViewRef, inView: aboutInView } = useInView({ threshold: 0.5 });
    const { ref: journeyInViewRef, inView: journeyInView } = useInView({ threshold: 0.2 });
    const { ref: projectsInViewRef, inView: projectsInView } = useInView({ threshold: 0.2 });
    const { ref: contactInViewRef, inView: contactInView } = useInView({ threshold: 0.5 });
  
    const getRef = (section: Section) => {
        switch (section) {
            case Section.Home:
                return homeInViewRef;
            case Section.About:
                return aboutInViewRef;
            case Section.Journey:
                return journeyInViewRef;
            case Section.Projects:
                return projectsInViewRef;
            case Section.Contact:
                return contactInViewRef;
            default:
                return homeInViewRef;
        }
    };

    const checkInView = (section: Section) => {
        switch (section) {
            case Section.Home:
                return homeInView;
            case Section.About:
                return aboutInView;
            case Section.Journey:
                return journeyInView;
            case Section.Projects:
                return projectsInView;
            case Section.Contact:
                return contactInView;
            default:
                return homeInView;
        }
    };

    return (
        <SectionInViewContext.Provider value={{ getRef, checkInView }}>
            {children}
        </SectionInViewContext.Provider>
    );
};

const useSectionInView = () => {
  return useContext(SectionInViewContext);
};

export { SectionInViewProvider, useSectionInView }
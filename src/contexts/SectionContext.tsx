import { createContext, useContext } from "react";
import { Section } from "../utils/enums/Section";
import { useInView } from "react-intersection-observer";

type SectionContextType = {
    getRef: (section: Section) => ((node?: Element | null | undefined) => void),
    checkInView: (section: Section) => boolean,
};

const SectionContext = createContext<SectionContextType | null>(null);

interface SectionProviderProps {
    children: React.ReactNode
}

const SectionProvider = ({ children }: SectionProviderProps) => {
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
        <SectionContext.Provider value={{ getRef, checkInView }}>
            {children}
        </SectionContext.Provider>
    );
};

const useSection = () => {
  return useContext(SectionContext);
};

export { SectionProvider as SectionInViewProvider, useSection as useSectionInView }
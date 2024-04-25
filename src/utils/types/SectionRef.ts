import { Section } from "../enums/Section";

type SectionRef = {
    section: Section,
    ref: Element | null | undefined,
};

export default SectionRef;
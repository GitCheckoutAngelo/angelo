import { useEffect, useState } from 'react'
import './Navbar.scss'
import { Section } from '../../utils/enums/Section'
import LogoIcon from '../logo-icon/LogoIcon'
import { useSectionInView } from '../../contexts/SectionInViewContext'
import { useSectionRef } from '../../contexts/SectionRefContext'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [currentSection, setCurrentSection] = useState<Section>(Section.Home);
    
    const sectionRef = useSectionRef();
    const sectionInView = useSectionInView();
  
    // update navbar as you scroll
    useEffect(() => {
      if(!sectionInView) return;
  
      if (sectionInView.checkInView(Section.Home)) { setCurrentSection(Section.Home); }
      else if (sectionInView.checkInView(Section.About)) { setCurrentSection(Section.About); }
      else if (sectionInView.checkInView(Section.Journey)) { setCurrentSection(Section.Journey); }
      else if (sectionInView.checkInView(Section.Projects)) { setCurrentSection(Section.Projects); }
      else if (sectionInView.checkInView(Section.Contact)) { setCurrentSection(Section.Contact); }
    }, [sectionInView]);

    const renderButtons = () => Object.keys(Section).map(s => {
        const current = s === currentSection.toString() ? "current" : undefined;
        const handleOnClick = () => sectionRef?.scrollTo(Section[s as Section]);
        return (
            <button key={s} className={current} onClick={handleOnClick}>{s}</button>
        )
    })

    return (
        <header className="navbar">
            <div className="logo">
                <LogoIcon />
                <a href="/">Angelo.</a>
            </div>

            <button className="menu-btn" onClick={() => setMenuOpen(prev => !prev)}>
                {menuOpen ? <i className="bx bx-x" id="menu-icon"></i> : <i className="bx bx-menu" id="menu-icon"></i>}
            </button>

            <nav className={`${menuOpen ? 'open' : ''}`}>
                {renderButtons()}
            </nav>
        </header>
    )
}

export default Navbar
import { useState } from 'react'
import './Navbar.scss'
import { Section } from '../../utils/enums/Section'
import LogoIcon from '../logo-icon/LogoIcon'

interface NavbarProps {
    currentSection: Section,
    setCurrentSection: (s: Section) => unknown,
}

const Navbar = ({ currentSection, setCurrentSection }: NavbarProps) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const renderButtons = () => Object.keys(Section).map(s => {
        const current = s === currentSection.toString() ? "current" : undefined;
        return (
            <a key={s} href={`#${s.toLowerCase()}`} className={current} onClick={() => setCurrentSection(Section[s as Section])}>{s}</a>
        )
    })

    return (
        <header className="navbar">
            <div className="logo">
                <LogoIcon />
                <a href="#">Angelo.</a>
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
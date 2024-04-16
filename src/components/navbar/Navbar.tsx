import {  } from 'react'
import './Navbar.css'
import { Section } from '../../utils/enums/Section'
import LogoIcon from '../logo-icon/LogoIcon'

interface NavbarProps {
    currentSection: Section,
    setCurrentSection: (s: Section) => unknown,
}

const Navbar = ({ currentSection, setCurrentSection }: NavbarProps) => {
    const renderButtons = () => Object.keys(Section).map(s => {
        const active = s === currentSection.toString() ? "active" : undefined;
        return (
            <a key={s} href={`#${s.toLowerCase()}`} className={active} onClick={() => setCurrentSection(Section[s as Section])}>{s}</a>
        )
    })

    return (
        <header className="header">
            <div className="logo">
                <LogoIcon />
                <a href="#">Angelo.</a>
            </div>

            <i className="bx bx-menu" id="menu-icon"></i>

            <nav className="navbar">
                {renderButtons()}
            </nav>
        </header>
    )
}

export default Navbar
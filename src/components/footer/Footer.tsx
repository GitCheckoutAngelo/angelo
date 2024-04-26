import { useSectionRef } from '../../contexts/SectionRefContext'
import { Section } from '../../utils/enums/Section';
import './Footer.scss'

const Footer = () => {
  const sectionRef = useSectionRef();

  return (
    <footer className="footer">
        <div className="text">
            <p>Copyright &copy; 2024 by GitCheckoutAngelo | All Rights Reserved</p>
        </div>
        <div className="top-btn">
            <button onClick={() => sectionRef?.scrollTo(Section.Home)}>
                <i className="bx bx-up-arrow-alt"/>
            </button>
        </div>
    </footer>
  )
}

export default Footer
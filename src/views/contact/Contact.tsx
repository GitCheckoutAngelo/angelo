import { LegacyRef } from 'react'
import './Contact.css'

// import robogalsSrc from '../../assets/robogals.jpg'

interface ContactProps {
    sectionRef: LegacyRef<HTMLElement>,
}
  

const Contact = ({ sectionRef }: ContactProps) => {

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <h2 className="heading">Contact <span>Me!</span></h2>

            {/* <form action="#">

                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full Name" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Address" required/>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Mobile Number" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Subject" required/>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
                    <span className="focus"></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form> */}
        </section>
    )
}

export default Contact
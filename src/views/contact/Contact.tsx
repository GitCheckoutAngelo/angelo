import { LegacyRef, useRef, useEffect } from 'react'
import './Contact.css'

import {  } from 'react';
import emailjs from '@emailjs/browser'
import { useSnackbar } from '../../contexts/SnackbarContext';

interface ContactProps {
    sectionRef: LegacyRef<HTMLElement>,
}

const Contact = ({ sectionRef }: ContactProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const snackbar = useSnackbar();

    useEffect(() => emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY), []);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const emailPromise = emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                {
                    senderName: nameRef?.current?.value,
                    senderEmail: emailRef?.current?.value,
                    senderMessage: messageRef?.current?.value,
                }
            );
            formRef.current?.reset();
            await emailPromise;
            snackbar?.display("Message was successfully sent", true);
        } 
        catch (error) {
          console.log(error);
          snackbar?.display("Could not send message", false);
        }
    };

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <h2 className="heading">Contact <span>Me!</span></h2>
            
            <form ref={formRef} onSubmit={handleSubmit}>

                <div className="input-box">
                    <div className="input-field">
                        <input ref={nameRef} type="text" placeholder="Full name" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input ref={emailRef} type="text" placeholder="Email" required/>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea ref={messageRef} cols={30} rows={10} placeholder="Write your message here..."></textarea>
                    <span className="focus"></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
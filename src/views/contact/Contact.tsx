import { useRef, useEffect } from 'react'
import './Contact.scss'

import {  } from 'react';
import emailjs from '@emailjs/browser'
import { useSnackbar } from '../../contexts/SnackbarContext';
import { useSectionInView } from '../../contexts/SectionInViewContext';
import { Section } from '../../utils/enums/Section';
import { useSectionRef } from '../../contexts/SectionRefContext';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const snackbar = useSnackbar();
    const sectionRef = useSectionRef();
    const sectionInView = useSectionInView();

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
        <section className="contact" id="contact" ref={sectionRef?.get(Section.Contact)}>
            <div className="in-view" ref={sectionInView?.getRef(Section.Contact)} />
            <h2 className="heading">Contact <span>Me!</span></h2>
            
            <form ref={formRef} onSubmit={handleSubmit}>

                <div className="input-box">
                    <div className="input-field">
                        <input ref={nameRef} type="text" placeholder="Full name" className="text-input" required/>
                        <span/>
                    </div>
                    <div className="input-field">
                        <input ref={emailRef} type="text" placeholder="Email" className="text-input" required/>
                        <span/>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea ref={messageRef} cols={30} rows={10} placeholder="Write your message here..." className="text-input"></textarea>
                    <span/>
                </div>

                <div className="btn-box btns">
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact
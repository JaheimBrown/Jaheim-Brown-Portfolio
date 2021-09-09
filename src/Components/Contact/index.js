import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ContactSection, ContactHeading, ContactDescription, Button, plane } from './ContactElements';

// ANIMATIONS
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])

    const thankYou = <Link to='/ThankYou'></Link>;

    return (
        <ContactSection id='contact'>
            <ContactHeading data-aos="fade-up" >Contact<span></span></ContactHeading>
            <ContactDescription data-aos="fade-up" >Plese submit the form below so that I can get back to you as soon as possible.</ContactDescription>

            <form  data-aos="fade-up" action="https://formsubmit.co/jaheimcbrown@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value='https://jaheim-brown-portfolio.hostman.site/ThankYou'/>
                <div>
                    <input type='text' name="name" id="name" required></input>
                    <label for="name">Name</label>
                </div>
                <div>
                    <input type='email' name="email" id="email" required></input>
                    <label for="email">Email</label>
                </div>
                <div>
                    <input type='text' name="_subject" id='subject' required></input>
                    <label for="subject">Subject</label>
                </div>
                <div>
                    <textarea type="text" name='message' id="message" required></textarea>
                    <label for="message">Message</label>
                </div>
                <Button type="submit">Send {plane}</Button>
            </form>
        </ContactSection>
    )
}

export default Contact;

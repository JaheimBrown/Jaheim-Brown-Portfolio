import React from 'react'
import { FooterSection, FooterConatiner, FooterSocials } from './FooterElements';

const Footer = () => {
    return (
        <FooterSection>
            <FooterConatiner>
                <FooterSocials>
                    <a href='https://www.instagram.com/jma_kxng/' target='_blank'><i class="fab fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/jaheim-brown-a92076209/' target='_blank'><i class="fab fa-linkedin-in"></i></a>
                    <a href='https://github.com/KxngJ' target='_blank'><i class="fab fa-github"></i></a>
                </FooterSocials>
                <p>&copy; Designed & Developed by Jaheim Brown</p>
            </FooterConatiner>
        </FooterSection>
    )
}

export default Footer;

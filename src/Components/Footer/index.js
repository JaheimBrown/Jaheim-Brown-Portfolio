import React from 'react'
import { FooterSection, FooterConatiner, FooterSocials } from './FooterElements';

const Footer = () => {
    return (
        <FooterSection>
            <FooterConatiner>
                <FooterSocials>
                    <a href=''><i class="fab fa-instagram"></i></a>
                    <a href=''><i class="fab fa-linkedin-in"></i></a>
                    <a href=''><i class="fab fa-github"></i></a>
                    <a href=''><i class="fas fa-envelope"></i></a>
                </FooterSocials>
                <p>&copy; Designed & Developed by Jaheim Brown</p>
            </FooterConatiner>
        </FooterSection>
    )
}

export default Footer;

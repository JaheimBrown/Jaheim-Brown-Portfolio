import React, {useEffect} from 'react';
import { PortfolioSection, ProjectImage1, PortfolioName, Description, ProjectsContainer, Project, ProjectDescription, ProjectName, TechUsed, ButtonContainer, PrimaryButton, SecButton } from './PortfolioElements';

import { PrimaryColor } from '../Global';

// PROJECT IMAGES
import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';
import project4 from '../../assets/projects/project4.png';

// REACT ICONS
import  { FaGlobe } from 'react-icons/fa';
import  { FiCode } from 'react-icons/fi';

// ANIMATIONS
import AOS from 'aos';
import 'aos/dist/aos.css'

const Portfolio = () => {
    
    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])

    return (
        <PortfolioSection id='portfolio'>
            <PortfolioName>Portfolio<span></span></PortfolioName>
            <Description>Below are some projects I have created.</Description>
            <ProjectsContainer>
              {/* PROJECT #1 */}
                <Project data-aos="fade-up">
                    <ProjectImage1 style= {{ backgroundImage: `url(${project1})` }} ></ProjectImage1>
                    <ProjectDescription>
                        <ProjectName>JBCodes</ProjectName>
                        <p>This is the second version of my portfolio website. With this version, I wanted to learn a new technoloy (React.js) to build an interactive website with animations and transitions with the use of Lottiefiles vanilla JavaScript and CSS.</p>
                        <TechUsed>
                            <h3>Tech Used</h3>
                            <ul>
                                <li><abbr title='Technologies Used'>REACT</abbr></li>
                                <li><abbr title='Technologies Used'>STYLED-COMPONENTS</abbr></li>
                            </ul>
                        </TechUsed>
                        <ButtonContainer>
                          <PrimaryButton href='https://jaheim-brown-portfolio.hostman.site/' target='_blank'>View Live <FaGlobe className='pHover' style={{color: `${PrimaryColor}`, marginLeft: '5px' }} /></PrimaryButton>
                          <SecButton href='https://github.com/KxngJ/Jaheim-Brown-Portfolio' target='_blank'> Code <FiCode style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></SecButton>
                        </ButtonContainer>
                    </ProjectDescription>
                </Project>
                {/* PROJECT #2 */}
                <Project data-aos="fade-up">
                    <ProjectImage1 style= {{ backgroundImage: `url(${project2})`, backgroundPosition: '-40px top' }} ></ProjectImage1>
                    <ProjectDescription>
                        <ProjectName>PUREART</ProjectName>
                        <p>I am currently building this project for a client who wants and eCommerce website to sell their art products and services. They wanted a Shopify site with a more custom layout so I used an existing Shopify theme and tweaked it with some additional lines of CSS..</p>
                        <TechUsed>
                            <h3>Tech Used</h3>
                            <ul>
                                <li><abbr title='Technologies Used'>HTML</abbr></li>
                                <li><abbr title='Technologies Used'>CSS</abbr></li>
                                <li><abbr title='Technologies Used'>LIQUID ( SHOPIFY )</abbr></li>
                            </ul>
                        </TechUsed>
                        <ButtonContainer>
                          <PrimaryButton>View Live <FaGlobe style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></PrimaryButton>
                          <SecButton> Code <FiCode style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></SecButton>
                        </ButtonContainer>
                    </ProjectDescription>
                </Project>
                 {/* PROJECT #3 */}
                 <Project data-aos="fade-up">
                    <ProjectImage1 style= {{ backgroundImage: `url(${project3})`, backgroundPosition: 'left 5%' }} ></ProjectImage1>
                    <ProjectDescription>
                        <ProjectName>PORTFOLIO V1</ProjectName>
                        <p>This is the first version of my portfolio website. I wanted to learn how to build websites using vanilla HTML, CSS and Javascript to build a website in which will serve to display all the projects I have created on my journey in learning web development.</p>
                        <TechUsed>
                            <h3>Tech Used</h3>
                            <ul>
                                <li><abbr title='Technologies Used'>HTML</abbr></li>
                                <li><abbr title='Technologies Used'>CSS</abbr></li>
                                <li><abbr title='Technologies Used'>JS</abbr></li>
                            </ul>
                        </TechUsed>  
                        <ButtonContainer>
                          <PrimaryButton href='https://kxngj.github.io/Portfolio-Jaheim-Brown/' target='_blank'>View Live <FaGlobe style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></PrimaryButton>
                          <SecButton href='https://github.com/KxngJ/Portfolio-Jaheim-Brown' target='_blank'> Code <FiCode style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></SecButton>
                        </ButtonContainer>
                    </ProjectDescription>
                </Project>
                 {/* PROJECT #4 */}
                 <Project data-aos="fade-up">
                    <ProjectImage1 style= {{ backgroundImage: `url(${project4})` , backgroundPosition: 'left top'}} ></ProjectImage1>
                    <ProjectDescription>
                        <ProjectName>JBCommerce</ProjectName>
                        <p>This is an E-commerce website I built using React for the frontend and commerce.js paired with stripe for the backend to create a fully functional web shopping experience.</p>
                        <TechUsed>
                            <h3>Tech Used</h3>
                            <ul>
                                <li><abbr title='Technologies Used'>REACT</abbr></li>
                                <li><abbr title='Technologies Used'>MATERIAL-UI</abbr></li>
                                <li><abbr title='Technologies Used'>COMMERCE.JS</abbr></li>
                                <li><abbr title='Technologies Used'>STRIPE.JS</abbr></li>
                            </ul>
                        </TechUsed>
                        <ButtonContainer>
                          <PrimaryButton href='https://ecommerce-project.hostman.site/' target="_blank">View Live <FaGlobe style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></PrimaryButton>
                          <SecButton href='https://github.com/KxngJ/Ecommerce-Project' target="_blank"> Code <FiCode style={{color: `${PrimaryColor}`, marginLeft: '5px'}} /></SecButton>
                        </ButtonContainer>
                    </ProjectDescription>
                </Project>
            </ProjectsContainer>
        </PortfolioSection>
    )
}

export default Portfolio;

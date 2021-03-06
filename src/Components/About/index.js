import React, {useEffect} from 'react';
import ImageAbout from '../../assets/aboutimage.png';
import { AboutSection, SectionName, AboutDescription, AboutContainer, AboutImage, AboutBio, BioHeading, BioDescription,BioClosing, AboutSkills, SkillHeading, SkillContainer, SkillClosing, ResButton } from './AboutElements';
import AOS from 'aos';
import 'aos/dist/aos.css'


    const About = () => {

        useEffect(()=> {
            AOS.init({duration: 1000});
        }, [])

        return (
            <AboutSection id='about'>
            <SectionName data-aos="fade-up" >About Me<span></span></SectionName>
            <AboutDescription data-aos="fade-up" >Get to know me better.</AboutDescription>
            <AboutContainer data-aos="fade-up">
                <AboutImage>
                    <img  alt='' src={ImageAbout} />
                </AboutImage>
                <AboutBio>
                    <BioHeading><span>Hello</span>I'm Jaheim Brown</BioHeading>
                    <BioDescription >A Self-taught Front End Developer and Web designer from St. Ann Jamaica. I first started on my self-taught journey back in October 2020 after being exposed to different web technologies and how you can combine them with design to create something meaningful to users all over the world. Although I know I’m still fairly new to the web development world I am excited to see where this journey will take me.</BioDescription>
                    <BioClosing><span>Hello</span></BioClosing>
                </AboutBio>
                <AboutSkills data-aos="fade-up">
                    <SkillHeading><span>Skills</span></SkillHeading>
                        <SkillContainer>
                        <h3>Languages</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>LIQUID (SHOPIFY)</li>
                            </ul>
                            <h3>Libraries</h3>
                            <ul>
                                <li>REACT</li>
                                <li>STYLED-COMPONENTS</li>
                            </ul>
                            <h3>Tools & Systems</h3>
                            <ul>
                                <li>GIT</li>
                                <li>NPM</li>
                                <li>VSCODE</li>
                                <li>NOTION</li>
                                <li>FIGMA</li>
                            </ul>
                        </SkillContainer>
                    <SkillClosing><span>Skills</span></SkillClosing>
                    <ResButton href='https://drive.google.com/file/d/1B1wXmKfJWndJjuLrx6lIjEb26AjriA02/view?usp=sharing' target='_blank' >Download Resume</ResButton>
                </AboutSkills>
            </AboutContainer>  
            </AboutSection>
        )
    }

    export default About;

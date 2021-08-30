import React, { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import ImageAbout from '../../assets/aboutimage.png';
import { AboutSection, SectionName, AboutDescription, AboutContainer, AboutImage, AboutBio, BioHeading, BioDescription,BioClosing, AboutSkills, SkillHeading, SkillContainer, SkillClosing } from './AboutElements';

    const About = () => {
        // Use Intersection Test
        const intersectionRef = React.useRef(null);

        const intersection = useIntersection(intersectionRef, {
            root: null,
            rootMargin: '0px',
            threshold: .5
          });

          const fade = (element) => {
              gsap.to(element, 1, {
                  opacity: 1,
              })
          }

          intersection && intersection.intersectionRatio > .5 ? fade('.intersection') : fade(null)

        return (
            <AboutSection  className='intersection' ref={intersectionRef} id='about'>
            <SectionName>About Me<span></span></SectionName>
            <AboutDescription>Get to know me better.</AboutDescription>
            <AboutContainer>
                <AboutImage>
                    <img className='anim'  alt='' src={ImageAbout} />
                </AboutImage>
                <AboutBio>
                    <BioHeading><span>Hello</span>I'm Jaheim Brown</BioHeading>
                    <BioDescription>A Self-taught Front End Developer and Web designer from St. Ann Jamaica. I first started on my self-taught journey back in October 2020 after being exposed to different web technologies and how you can combine them with design to create something meaningful to users all over the world. Although I know I’m still fairly new to the web development world I am excited to see where this journey will take me.</BioDescription>
                    <BioClosing><span>Hello</span></BioClosing>
                </AboutBio>
                <AboutSkills>
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
                </AboutSkills>
            </AboutContainer>  
            </AboutSection>
        )
    }

    export default About;

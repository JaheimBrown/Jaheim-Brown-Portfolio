import React, { useEffect, useRef } from 'react'
import heroImage from '../../assets/heroImage2.svg';
import lottie from 'lottie-web';

import { HeroContainer, Left, HeroName, HeroTitle, HeroDescription, ButtonContainer,PrimeButton, SecondaryButton, Right } from './HeroElements';

// FONTS TEST
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/scroll.json')
        })
    },[]);

const container = useRef(null);

    return (
        <HeroContainer id='home'>
            <Left>
                <HeroName>JAHEIM BROWN</HeroName>
                <HeroTitle>Design, Develop & Deploy<br/>Cutting Edge Web<br/>Applications.</HeroTitle>
                <HeroDescription>I Design and Impliment modern web applications with the focus on responsive design and accessibility.</HeroDescription>
                <ButtonContainer>
                    <PrimeButton><a href='/contact'>Resume</a> <FontAwesomeIcon className="rel" icon={faChevronRight}/> </PrimeButton>
                    <SecondaryButton to="portfolio" smooth={true} duration={500} spy={true} exact={true} offset={-80}><a href='/portfolio'>Projects</a>  <FontAwesomeIcon className="rel" icon={faChevronRight}/></SecondaryButton>
                </ButtonContainer>
            </Left>
            <Right>
                <img alt="" src={heroImage}/>
            </Right>
            <div className="scroll" ref={container}></div>
        </HeroContainer>
    )
}

export default Hero;

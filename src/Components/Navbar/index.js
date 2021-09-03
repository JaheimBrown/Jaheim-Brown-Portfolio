import React from 'react'
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/Logo.svg'; 
import phone from '../../assets/phone.svg'; 

import { NavContainer, Nav, NavLogo, NavItems, NavElements,Hamburger, Button } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <NavContainer>
            <Nav>
                <NavLogo to='home' smooth={true} duration={500} spy={true} exact={true} offset={-80} > <img alt='' src={Logo}/> </NavLogo>
                <NavItems>
                    <NavElements to="home" smooth={true} duration={500} spy={true} exact={true} offset={-80} >Home</NavElements>
                    <NavElements to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80}>About</NavElements>
                    <NavElements to="portfolio" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Portfolio</NavElements>
                </NavItems>

                <Hamburger onClick={toggle}>
                    <FaBars/>
                </Hamburger>

                <Button to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                    <img alt='' src={phone}/>
                    <a>Contact</a>
                </Button>
            </Nav>
        </NavContainer>
    )
}

export default Navbar;

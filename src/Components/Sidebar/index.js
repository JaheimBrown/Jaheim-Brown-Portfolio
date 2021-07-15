import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa';
import phone from '../../assets/phone.svg'; 
import { SidebarContainer, ClosingHam, SidebarWrapper, NavItems, SidebarButton, NavElements, ButtonCenter } from './SidebarElements';

const SidebarElements = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper>
                <ClosingHam onClick={toggle}>
                    <FaTimes />
                </ClosingHam>
                <NavItems>
                    <NavElements onClick={toggle} NavElements to="home" smooth={true} duration={500} spy={true} exact={true} offset={-80} >Home</NavElements>
                    <NavElements onClick={toggle} to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80}>About</NavElements>
                    <NavElements onClick={toggle} to="portfolio" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Portfolio</NavElements>
                    <ButtonCenter>
                        <SidebarButton onClick={toggle} to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                                <img alt='contact me' src={phone}/>
                                <a>Contact</a>
                        </SidebarButton>
                    </ButtonCenter>
                </NavItems>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SidebarElements;
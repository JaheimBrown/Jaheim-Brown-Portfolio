import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { BgColor } from '../Global';
import { Button, Hamburger } from '../Navbar/NavbarElements';

export const SidebarContainer = styled.aside`
display: none;
@media screen and (max-width: 1024px) {
    background-color: ${BgColor};
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: grid;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
}
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const NavItems = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    margin-top: 17%;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(5, 60px);
    }
`;

export const NavElements = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 80px;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover{
        background-color: #373749;
    }
`;

export const ClosingHam = styled.div`
    position: absolute;
    top: 20px; 
    right: 5%;
    background: transparent;
    font-size: 1.85rem;
    cursor: pointer;
`;

export const ButtonCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: span 2;
`;

export const SidebarButton = styled(Button)`
    display: flex;
    padding: 15px 35px;
    a{font-size: 1rem;}
`;
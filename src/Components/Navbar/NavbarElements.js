import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll';
import { PrimaryColor, SecondaryColor, BgColor } from '../Global';

export const NavContainer = styled.div`
position: sticky;
top: 0;
background-color: ${BgColor};
display: flex;
justify-content: center;
align-items: center; 
box-shadow: 3px 3px 12px rgba(0,0,0,.1);
z-index: 99;
transition: .3s linear;

&.scroll-down {
    transform: translateY(-100px);
}

&.scroll-up {
    transform: translateY(0);
}
`;

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
padding: 0 20px;
width: 100%;
max-width: 1300px;
`;

export const NavLogo = styled(LinkS)`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: auto;
    height: 100%;

    img {
        width: 150%;
    }

    @media screen and (max-width: 1024px) {
        width: 100px;
    }
`;

export const NavItems = styled.ul`
    display: flex;
    justify-self: center;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    width: 350px;
    transition: all .3s ease-in-out;

    @media screen and (max-width: 1024px) {
        display: none;  
    }

`;

export const NavElements = styled(LinkS)`
display: flex;
justify-content: center;
align-items: center;
height: 80px;
font-size: 1.125rem;
letter-spacing: .5px;
text-transform: capitalize;
text-decoration: none;
padding:  0 1rem;
cursor: pointer;
transition: .3s ease-in-out;

&:hover{
    color: ${SecondaryColor};
}

@media screen and (min-width: 1024px) {
    &.active {
        border-bottom: 2px solid ${PrimaryColor};
}
}

@media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    font-size: 24px;

    &:hover{
        background-color: #373749;
        color: #fff;
    }
}

@media screen and (max-width: 768px) {
    font-size: 18px;
}
`;

export const Hamburger = styled.div`
    display: none;
    @media screen and (max-width: 1024px) {
        display: inline-block;
        postion: absolute;
        right: 5%;
        top: 20px;  
        font-size: 2rem;
        cursor: pointer;
    }
`;

export const Button = styled(LinkS)`
position: relative;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: .5px;
text-transform: capitalize;
padding: 10px 25px;
border-radius: 4px;
background-color: ${SecondaryColor};
box-shadow: 0 13px 24px rgba(0,0,0,0.2);
outline: none;
cursor: pointer;

a{position: relative; color: inherit; text-decoration: none; z-index: 5;}
img{position: relative; color: inherit; margin-right: 7px; z-index: 5; transform: rotate(140deg); transition: .3s ease-in-out;}

&::after{
content: '';
position: absolute;
background-color: ${PrimaryColor};
border-radius: inherit;
left: 0;
top: 0;
bottom: 0;
right: 0;
height: 100%;
width: 0%;
transition: all .25s ease-in-out;
}

&:hover {
   img {
       transform: rotate(0deg);
   }
}

&:hover::after{
    width: 100%;
}

@media screen and (max-width: 1024px){
    display: none;
}
`;

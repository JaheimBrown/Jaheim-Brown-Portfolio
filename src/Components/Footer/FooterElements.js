import styled from 'styled-components';
import { BgColor, SecondaryBg } from '../Global'; 

export const FooterSection = styled.footer`
    background-color: #1E1E29;
    color: #fff;
    height: 50px;

    @media screen and (max-width: 540px) {
        height: auto;
    }
`;

export const  FooterConatiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1300px;
    margin: 0 5%;

    p { font-size: clamp(.75rem, 1vw, 1.125rem); }

    @media screen and (max-width: 540px) {
        flex-direction: column;
        p{
            margin-top: 5px;
        }
    }
`;

export const FooterSocials = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px; 
    width: 300px;
    height: 100%;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #272736;
        color: #fff;
        border-radius: 50%;
        padding: .5em;
        text-decoration: none;
        font-size: 1.125rem;
        transition: .3s ease;

        &:hover, &:focus{
            background-color: #fff;
            color: #000;
        }
    }
`;
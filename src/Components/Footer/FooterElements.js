import styled from 'styled-components';
import { SecondaryBg } from '../Global'; 

export const FooterSection = styled.footer`
    background-color: ${SecondaryBg};
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
        display: inline-block;
        color: #fff;
        text-decoration: none;
        font-size: 1.125rem;
    }
`;
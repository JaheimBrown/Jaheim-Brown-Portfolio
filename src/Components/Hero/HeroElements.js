import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { PrimaryColor, SecondaryColor } from '../Global';

export const HeroContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1300px;
height: 570px;
padding: 20px 40px;
margin: 0 auto; 

p { width: 70%; }

.mobileImg {
    display: none;
}

@media screen and (max-width: 1024px) {
        align-items: flex-start;
        padding-top: 4rem;
    }
    /* tablet View */
    @media screen and (max-width: 700px) {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        overflow-x: hidden;

        .mobileImg {
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 50px;
        opacity: .2;
      }
    } 
`;

export const Left = styled.div`
width: 55%;

  /* tablet View */
  @media screen and (max-width: 720px) {
        grid-column: 1 / 9;
        width: 100%;
    } 
`;

export const HeroName = styled.h1`
color: ${PrimaryColor};
font-size: clamp(14px, 2vw, 18px);
letter-spacing: 4px;
`;

export const HeroTitle = styled.h2`
font-size: clamp(24px, 3vw, 48px);

/* Mobile View */
@media screen and (max-width: 900px) {
   margin-top: 10px;
   line-height: 1.5;
}
`;
export const HeroDescription = styled.p`
margin-top: 1rem;
font-size: clamp(14px, 2vw, 18px);
width: 475px;
color: #f2f2f2;

@media screen and (max-width: 1050px) {
        width: 450px;
    }
    @media screen and (max-width: 1050px) {
        width: 350px;
    }
    /* Mobile View */
    @media screen and (max-width: 720px) {
        text-align: left;
        line-height: 1.5;
        margin-bottom: 20px;
    }
    /* Mobile-Small */
        @media screen and (max-width: 320px) {
        width: 300px;
    }
`;

export const ButtonContainer = styled.div`
@media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        /* Mobile-Small */
        @media screen and (max-width: 320px) {
            width: 300px;
        }
    }
}`;

export const PrimeButton = styled.a`
position: relative;
background-color: ${PrimaryColor};
display: inline-flex;
justify-content: center;
align-items: center;
text-decoration: none;
margin-right: 20px;
padding: 10px 20px;
min-width: 100px;
letter-spacing: .5px;
text-transform: capitalize;
border-radius: 4px;
color: inherit;
z-index: 5;

/* after styling */
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


&:hover::after{
    width: 100%;
}

span{position: relative; margin-right: 5px; z-index: 5; margin: 0;}


.heroIcon {
    position: relative;
    color: inherit;
    transition: .3s linear;
    z-index: 5;
    margin-left: 5px;
}

&:hover{ 
    color: #000;
    .heroIcon {
        transform: translateX(5px);
}}

&:hover::after{
    background-color: #fff;
}
`;

export const SecondaryButton = styled(LinkS)`
position: relative;
background-color: ${SecondaryColor};
display: inline-flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 10px 20px;
min-width: 100px;
letter-spacing: .5px;
border-radius: 4px;
color: inherit;
cursor: pointer;

/* after styling */
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


&:hover::after{
    width: 100%;
}

span{position: relative; margin-right: 5px; z-index: 5; color: inherit; text-decoration: none;}

.heroIcon {
    position: relative;
    color: inherit;
    transition: .3s linear;
    z-index: 5;
}

&:hover{ 
    color: #000;
    .heroIcon {
        transform: translateX(5px);
}}

&:hover::after{
    background-color: #fff;
}
`;

export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    max-width: 450px;
    min-width: 335px;
    min-width: 335px;

    @media screen and (max-width: 700px) {
        opacity: .3;
        position: absolute;
        top: 120px;
        right: -80px;
        justify-content: flex-end;

        .heroImg {
            width: 40%;
            min-width: 250px;
        }
    } 
`;
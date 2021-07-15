import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Global';
import { Button } from '../Navbar/NavbarElements';

export const HeroContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1300px;
height: 570px;
margin: 0 auto;

@media screen and (max-width: 1024px) {
        align-items: flex-start;
        padding-top: 4rem;
    }
    /* tablet View */
    @media screen and (max-width: 720px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 1.5em 1em 0 1em;
    } 
      /* Mobile-Small */
      @media screen and (max-width: 320px) {
        padding: 1.5em 1.5em 0 1.5em;
    }
`;

export const Left = styled.div`
max-width: 700px;
margin-left: 5%;

@media screen and (max-width: 720px) {
   margin: 0;
}
`;

export const HeroName = styled.h1`
color: ${PrimaryColor};
font-size: clamp(14px, 2vw, 1.125rem);
letter-spacing: 5px;

/* Mobile View */
@media screen and (max-width: 900px) {
   letter-spacing: 10px;
}
`;
export const HeroTitle = styled.h2`
font-size: clamp(1.5rem, 3vw, 3rem);

/* Mobile View */
@media screen and (max-width: 900px) {
   margin-top: 10px;
   line-height: 1.5;
}
`;
export const HeroDescription = styled.p`
margin-top: 1rem;
font-size: clamp(14px, 2vw, 1.125rem);
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
margin: 1rem 1rem 0 0;
padding: 10px 30px;
letter-spacing: .5px;
text-transform: capitalize;
border-radius: 4px;
color: #fff;

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


/* Mobile View */
@media screen and (max-width: 720px) {
    margin: 0 0 10px 0;
}

p{position: relative; margin-right: 5px; z-index: 5;}


&:hover{ color:black; svg{transform: translateX(5px);}}

&:hover::after{
    background-color: #fff;
}
`;

export const SecondaryButton = styled(Button)`
background-color: ${SecondaryColor};
display: inline-block;
padding: 10px 30px;
letter-spacing: .5px;
text-transform: capitalize;

a{position: relative;}

&:hover{ color:black; svg{transform: translateX(5px);}}

&:hover::after{
    background-color: #fff;
}
`;

export const Right = styled.div`
img{
    width: 450px;
    @media screen and (max-width: 1235px) {
        width: 400px;
    }
    @media screen and (max-width: 1080px) {
        width: 375px;
    }
    @media screen and (max-width: 1024px) {
        width: 350px;
    }

    /* Mobile View */
    @media screen and (max-width: 720px) {
        display: none;
    }
}
margin-right: 5%;
`;

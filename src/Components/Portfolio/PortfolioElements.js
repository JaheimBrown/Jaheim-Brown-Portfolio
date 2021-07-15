import styled from 'styled-components';
import { BgColor, ButtonPro, ParaCol, SecondaryBg } from '../Global';
import { SectionName, AboutDescription } from '../About/AboutElements';

export const PortfolioSection = styled.div`
  max-width: 1300px;
  height: auto;
  margin: 0 auto;
`;

export const PortfolioName = styled(SectionName)``;
export const Description = styled(AboutDescription)`
  @media screen and (max-width: 1024px) {
      margin-bottom: 2rem;
    }
`;


export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
`;

export const Project = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${SecondaryBg};
  width: clamp(300px, 80vw, 1200px);
  padding: 1rem; 
  margin-bottom: 2rem;
  border-radius: 25px;
  cursor: pointer;
  opacity: .6;
  transition: .3s ease;

  &:hover{opacity: 1; transform: scale(1.05);}

  &::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, .1);
    transition: .3s ease-in-out; 
    pointer-events: none;
  }

  &:hover::before{
    box-shadow: 12px 12px 20px rgba(0, 0, 0, .2);
  }

  /* TABLET VIEW */
  @media screen and (max-width: 1024px) {
    width: 750px;
    padding: .5rem;
  }

   /* SMALL TABLET VIEW */
   @media screen and (max-width: 768px) {
    width: 700px;
  }

  /* SURFACE DUO */
  @media screen and (max-width: 540px) {
    flex-direction: column;
      width: 480px;
      grid-gap: 1rem;
      overflow: hidden;
  }

  /* MOBILE VIEW */
  @media screen and (max-width: 420px) {
        flex-direction: column;
        width: 330px;
        grid-gap: 1rem;
        overflow: hidden;
      }

      @media screen and (max-width: 320px) {
        flex-direction: column;
        width: 270px;
        grid-gap: 1rem;
        overflow: hidden;
      }
`;

// IMAGE STYLING
export const ProjectImage1 = styled.div`
  display: block;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
  object-fit: cover;
  width: 220%;
  height: 250px;
  margin-right: 1.125rem;

    /* TABLET VIEW */
    @media screen and (max-width: 1024px) {
        width: 240%;
        align-self: flex-start;
      }
      @media screen and (max-width: 700px) {
        width: 100%;
        margin: 0;
      }
  `;

export const ProjectDescription = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;

  p {
      font-size: clamp(14px, 2vw, 1.125rem);
      text-align: justify;
      line-height: 35px;
      color: ${ParaCol};

      @media screen and (max-width: 1024px) {
      line-height: 40px;
    }
  }
`;

export const ProjectName = styled.h1`
text-transform: uppercase;
  font-size: clamp(1rem, 1.5rem, 2rem);
  font-weight: normal;

  @media screen and (max-width: 400px) {
      align-self: center;
    }
`;

export const TechUsed = styled.div`
  display: flex;
  margin-top: 1rem;
  
  li {margin-right: 15px;}

  @media screen and (max-width: 320px) {
    justify-content: space-between;
    width: 300px;
  }
`;

export const ButtonContainer = styled.div`
   @media screen and (max-width: 320px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-itmes: center;
      }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;  
  padding: 10px 25px;
  margin-top: 1rem;
  border-radius: 4px;
  background-color: ${BgColor};
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 50%);
  font-size: clamp(14px, 1.125vw, 1rem);
  transition: .3s ease;
  cursor: pointer;
  background-color: ${ButtonPro};
  img{width: 20px; margin-left: 10px;}

  &:hover{background-color: #fff; color: Black;}

     /* TABLET VIEW */
     @media screen and (max-width: 1024px) {
        padding: 8px 20px;
      }
`;

export const SecButton = styled(PrimaryButton)`
  margin-left: 1rem;
    @media screen and (max-width: 320px) {
        margin: 10px 0;
    }
`;
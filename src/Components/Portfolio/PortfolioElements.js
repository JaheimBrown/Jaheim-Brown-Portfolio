import styled from 'styled-components';
import { ParaCol, PrimaryColor, SecondaryBg } from '../Global';
import { SectionName, AboutDescription } from '../About/AboutElements';

export const PortfolioSection = styled.div`
  height: auto;
  margin: 0 auto 2.5em auto; 
  max-width: 1300px;
`;

export const PortfolioName = styled(SectionName)``;
export const Description = styled(AboutDescription)`
  margin-bottom: 2.5em;
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
  display: grid;
  grid-template-columns: 575px 1fr;
  grid-gap: 1em;
  background-color: #272735;
  max-width: 1200px;
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
export const ProjectImage1 = styled.span`
  grid-column: 1/2;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 20px 0 0 20px;

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
  display: grid; 
  padding: 1rem;
  grid-row-gap: 1.5em;
  grid-template-columns: 1fr 1fr;

  p {
      font-size: clamp(14px, 2vw, 1.125rem);
      text-align: justify;
      line-height: 1.9em;
      color: ${ParaCol};
      grid-column: 1/3;
      grid-row: 2/3;

      @media screen and (max-width: 1024px) {
      line-height: 40px;
    }
  }
`;

export const ProjectName = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  color: ${PrimaryColor};
  position: relative;
  grid-column: 1/3;

  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 65px;
    height: 3px;
    border-radius: 4px;
    bottom: -5px;
  }

  @media screen and (max-width: 400px) {
      align-self: center;
    }
`;

export const TechUsed = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;

  h3 { font-size: 1rem; margin-bottom: 5px; }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    li {
      font-size: .9em;
      color: #DFDFDF;
      margin:  0 15px;
    }
  }

  @media screen and (max-width: 320px) {
    justify-content: space-between;
    width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  align-items: flex-end;
   @media screen and (max-width: 320px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-itmes: center;
      }
`;

export const PrimaryButton = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;  
  border-radius: 4px;
  width: 130px;
  height: 40px;
  background-color: #363648;
  color: #fff;
  font-size: 1em;
  text-decoration: none;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 50%);
  transition: .3s ease;
  cursor: pointer;
  img{width: 15px; margin-left: 10px;}

  &:hover{background-color: ${PrimaryColor}; color: #fff;}

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
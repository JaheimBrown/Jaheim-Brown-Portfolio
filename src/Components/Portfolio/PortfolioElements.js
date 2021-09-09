import styled from 'styled-components';
import { ParaCol, PrimaryColor } from '../Global';
import { SectionName, AboutDescription } from '../About/AboutElements';

export const PortfolioSection = styled.div`
  height: auto;
  margin: 0 auto 3em auto; 
  max-width: 1300px;
`;

export const PortfolioName = styled(SectionName)``;
export const Description = styled(AboutDescription)`
  margin-bottom: 20px;
`;


export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1300px;

  @media screen and (max-width: 605px) {
    padding: 1em;
    grid-gap: 1em;
  }
`;

export const Project = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 575px 1fr;
  grid-gap: 1em;
  background-color: #1E1E29;
  max-width: 1300px;
  margin-bottom: 2rem;
  border-radius: 25px;
  cursor: pointer;
  opacity: .6;
  transition: .3s ease;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25px;
    transition: .3s ease-in-out; 
    pointer-events: none;
  }

  &:hover::before{
    box-shadow: 6px 6px 20px rgba(0, 0, 0, .2);
  }

  @media screen and (max-width: 1165px) {
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (max-width: 865px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: 605px) {
    grid-gap: 0;
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

  @media screen and (max-width: 865px) {
    background-position: top center!important;
    height: 250px;
  }

  @media screen and (max-width: 605px) {
    height: 300px;
  }
  `;

export const ProjectDescription = styled.div`
  display: grid; 
  padding: 1rem;
  grid-row-gap: 1.5em;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;

  p {
      font-size: clamp(14px, 2vw, 1.125rem);
      text-align: justify;
      line-height: 1.9em;
      color: ${ParaCol};
      grid-column: 1/3;
      grid-row: 2/3;
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
      margin:  0 14px;
    }
  }

  @media screen and (max-width: 605px) {
    grid-column: 1/3;
    grid-row: 3/4;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 865px) {
    justify-content: flex-end;
  }

  @media screen and (max-width: 605px) {
    grid-column: 1/3;
    grid-row: 4/5;
    justify-content: flex-start;
  }
`;

export const PrimaryButton = styled.a`
  display: flex;
  justify-content: space-evenly;
  align-items: center;  
  border-radius: 4px;
  width: 130px;
  height: 40px;
  background-color: #272736;
  color: #fff;
  font-size: 1em;
  text-decoration: none;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 50%);
  transition: .3s ease;
  cursor: pointer;
  img{width: 15px; margin-left: 10px;}

  &:hover{background-color: #fff; color: black;}
`;

export const SecButton = styled(PrimaryButton)`
  margin-left: 1em;
  /* background-color: unset; */
  border: 2px solid #363648;
`;
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, ParaCol } from '../Global';


export const AboutSection = styled.section`
    max-width: 1300px;
    height: atuo;
    margin: 0 auto 2.5em auto; 

    @media screen and (max-width: 720px) {
            width: auto;
        }
    `;

    export const SectionName = styled.h1`
        font-size: 2em;
        color: ${PrimaryColor};
        margin: 0 auto 15px 5%;
        text-align: center;
        position: relative;
        display: inline-block;

        span {
            width: 70px;
            height: 4px;
            border-radius: 5px;
            background-color: ${SecondaryColor};
            position: absolute;
            bottom: -5px;
            left: 0;
        }
    `;

    export const AboutDescription = styled.p`
        font-size: 1rem;
        color: #f2f2f2;
        margin: 0 0 1rem 5%;
    `;

    // Bio Container Items
export const AboutContainer = styled.div`
        position: relative;
        display: grid;
        grid-template-columns: 1fr 2fr;

        @media screen and (max-width: 720px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    `;

export const AboutImage = styled.div`
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

            img{
                width: 350px;
                height: 350px;
                @media screen and (max-width: 900px) {
                    position: relative;
                    left: 20px;
                    width: 290px;
                    height: 290px;
                }

                @media screen and (max-width: 720px) {
                width: 15em;
                height: 15em;
                }
            }
    `;

 export const AboutBio = styled.div`
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        padding: 2.5rem;

        @media screen and (max-width: 900px) {
            padding: 1rem;
            width: 100%;
        }

        @media screen and (max-width: 720px) {
            margin-bottom: 1rem;
        }
    `;

 export const BioHeading = styled.h3`
        position: relative;
        left: -8px;
        font-weight: Bold;

        @media screen and (max-width: 720px) {
            left: 0;
        }

        span {
            color: ${PrimaryColor};
            margin-right: 5px;

            &::before{
                content: '<';
                color: ${SecondaryColor};
            }
            &::after{
                content: '>';
                color: ${SecondaryColor};
            }
        }
    `;
 export const BioDescription = styled.p`
        font-size: clamp(.75rem, 2vw, 1.125rem);
        text-align: justify;
        color: ${ParaCol};
        line-height: 50px;
        padding: .5rem 2rem;    
        border-left: 1px solid #8C8989;

        @media screen and (max-width: 900px) {
            width: 450px;
        }

        @media screen and (max-width: 720px) {
            width: 375px;
            padding: .5rem 1rem
        }

        /* SURFACE DUO */
        @media screen and (max-width: 540px) {
            width: 485px;
        }

        @media screen and (max-width: 415px) {
            width: 390px;
        }

        @media screen and (max-width: 375px) {
            width: 350px;
        }

        @media screen and (max-width: 320px) {
            width: 300px;
        }
    `;

 export const BioClosing = styled(BioHeading)`
        span {
            &::before{
                content: '</';
            }
        }
    `;

    // SKILLS SECTION //

 export const AboutSkills = styled.div`
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        padding: 1.5rem 3rem;
        margin: 0 auto;

        @media screen and (max-width: 720px) {
            align-self: flex-start;
            padding: 0;
            margin-left: 3.5%;
        }
        @media screen and (max-width: 320px) {
            margin-left: 5%;
        }
    `;

  export  const SkillHeading = styled(BioHeading)``;

 export   const SkillClosing = styled(BioClosing)``;

 export const SkillContainer = styled.div`
        width: 80vw;
        max-width: 1300px;
        padding: 1rem 2rem;
        margin: 0 auto;
        border-left: 1px solid #8C8989;

        @media screen and (max-width: 700px) {
           padding: 1rem;
           width: 100%;
        }

        @media screen and (max-width: 415px) {
            width: 390px;
        }

        @media screen and (max-width: 375px) {
            width: 340px;
        }

        @media screen and (max-width: 320px) {
            width: 300px;
        }

            h3{ margin-bottom: 1rem; font-size: clamp(1rem, 2vw, 1.125rem);}

            ul {
                display: flex;
                height: 40px;
                border-bottom: 2px dotted #8C8989;
                border-width: 4px;
                padding-bottom: 2rem;
                margin-bottom: 1rem;

                @media screen and (max-width: 420px) {
                    display: flex;
                    justify-content: flex-start;
                    align-items: space-between;
                    grid-gap: 1em;
                    flex-wrap: wrap;
                    height: 80px;
                }

                li { 
                    position: relative;
                    left: 30px;
                    font-size: clamp(.75rem, 2vw, 1rem);
                    color: ${ParaCol};
                    margin-right: 3rem;

                    @media screen and (max-width: 375px) {
                        left: 13px;
                        margin-right: 20px;
                    }
                }
            }            
    `;
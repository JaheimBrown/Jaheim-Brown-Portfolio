import styled from 'styled-components';
import { AboutDescription, SectionName } from '../About/AboutElements';
import { PrimaryColor, SecondaryBg } from '../Global';

// FONTS AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const plane = <FontAwesomeIcon className='sendIcon' icon={faPaperPlane}></FontAwesomeIcon>;

//** STYLING **//
export const ContactSection = styled.section`
    height: 530px;
    max-width: 725px;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 2rem;
        width: 100%;

        div{
            width: 100%;
            position: relative;
            
            label{ font-size: clamp(0.75rem, 1vw, 1rem); color: #ACACAC; position: absolute; top: 12px; left: 10px; transition: .3s ease-in-out; pointer-events: none;} 

                input:focus ~ label,
                textarea:focus ~ label,
                input:valid ~ label,
                textarea:valid ~ label {
                top: -20px;
                left: 0px;
                color: ${PrimaryColor};
            }
        }

        input,textarea{
            color: #fff;
            width: 100%;
            background-color: ${SecondaryBg};
            border: 0;
            outline: 0;
            padding: 10px;
            height: 40px;
            box-shadow: 8px 8px 15px rgba(0, 0, 0, .2);
            margin-bottom: 2rem;
            
            &:focus{
                border-bottom: 2px solid ${PrimaryColor};
            }
        }

        textarea{height:100px; margin-bottom: 1rem;}
    }
`;

export const ContactHeading = styled(SectionName)``;

export const ContactDescription = styled(AboutDescription)`
    margin-bottom: 2rem;
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${SecondaryBg};
    color: #fff;
    padding: 10px 25px;
    height: 40px;
    width: 105px;
    border: 0;
    outline: 0;
    transition: .3s ease-in-out;
    cursor: pointer; 

    &:hover,:focus{
        background-color: #fff;
        color: #000;

        .sendIcon{
            color: blue;
        }
    }
`;
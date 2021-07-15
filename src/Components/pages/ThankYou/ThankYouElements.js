import styled from 'styled-components';
import { ParaCol, PrimaryColor } from '../../Global';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    height: 80vh;
    max-width: 1300vh;
`;
export const NotFound = styled.div`
    text-align: center;

    h1 {
        color: ${PrimaryColor};
        font-size: 1.125rem;
        margin: 0;
        letter-spacing: 7px;
        text-align: left;
        margin-left: 15px;
    }

    h2 {
        width: 500px;
        font-size: 48px;
        line-height: 1.3;
    }

    p{
        font-size: 1.125rem;
        color: ${ParaCol};
    }
    
    a{
        color: inherit;

        &:hover{color:blue;}
    }
`;
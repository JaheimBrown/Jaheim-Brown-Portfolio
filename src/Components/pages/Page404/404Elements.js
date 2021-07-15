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
    h1 {
        color: ${PrimaryColor};
        font-size: 32px;
        margin: 0;
        position: relative;
        top: 19px;
        right: 20px;
    }

    h2 {
        font-size: 48px;
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
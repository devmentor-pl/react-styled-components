// ./src/components/styled/Row.js
import styled, { css, keyframes } from 'styled-components';

import logo from './../../images/logo.png';

const loadAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100vw);
    }

    25% {
        opacity: .25;
        transform: translateX(-50vw);
    }

    75% {
        opacity: .25;
        transform: translateX(-100vw);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }

`;

const DefaultStyledRow = styled.div`
    --color-alfa: ${ props => props.theme.colorAlfa};

    animation: ${loadAnimation} 3s;
    transition: 2s;

    color: var(--color-alfa);
    border: 2px solid var(--color-alfa);

    background-color: #fce2c2;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: right bottom;

    padding: 20px;

    ${ props => props.type === 'dark' && css`
        background-color: #c5aeb4;
        color: #fce2c2;

    `};

    @media ${props => props.theme.media.tablet} {
        margin: 0 40px;
    }
    
    &:hover {
        background-color: #fcc5c2;
    }

    h1 { font-size: 20px; }
    p { font-size: 12px; }

`

const StyledRow = styled(DefaultStyledRow)(
    props => props.style
);

export default StyledRow;
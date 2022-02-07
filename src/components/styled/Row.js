import styled, { css } from 'styled-components';
import logo from './../../images/logo.png';

const DefaultStyledRow = styled.div`
    --color-alfa: #6cb2d1;
    color: var(--color-alfa);
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-color: #fce2c2;
    ${props =>
        props.type === 'dark' &&
        css`
            background-color: #c5aeb4;
            color: #fce2c2;
        `};
    border: 2px solid var(--color-alfa);
    padding: 20px;
    &:hover {
        background-color: #fcc5c2;
    }

    h1 {
        font-size: 20px;
    }

    p {
        font-size: 12px;
    }
`;

const StyledRow = styled(DefaultStyledRow)(props => props.style);

export default StyledRow;

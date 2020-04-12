// ./src/components/Row.js
import React from 'react';

import StyledRow from './styled/Row';

const Row = ({ style = {}, type }) => {
    return (
        <StyledRow style={ style } type={ type }>
            <h1>React: Styled Components</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </StyledRow>
    )
}

export default Row;
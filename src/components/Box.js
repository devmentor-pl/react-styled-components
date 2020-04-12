// ./src/components/Box.js
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Row from './Row';

const Box = () => {
    const rowStyle = {
        padding: '100px'
    }

    return (
        <>
            <Row type="dark" />
            <ThemeProvider theme={ {colorAlfa: 'blue'} }>
                <Row style={ rowStyle }/>
            </ThemeProvider>
        </>
    );
}

export default Box;
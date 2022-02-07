// ./src/components/Box.js
import React from 'react';
import Row from './Row';

const Box = () => {
    const rowStyle = {
        padding: '100px'
    }

    return (
        <>
            <Row type="dark" />
            <Row style={ rowStyle }/>
        </>
    );
}

export default Box;
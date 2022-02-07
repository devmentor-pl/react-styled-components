// ./src/components/App.js
import React from 'react';

import Box from './Box';
import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';

const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <Box />
    </>
);

export default App;
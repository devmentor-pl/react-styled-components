// ./src/components/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Box from './Box';
import themeSettings from './styled/theme'
import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';

// ...
const App = () => (
    <>
        <ResetStyle />
        <GlobalStyle />
        <ThemeProvider theme={ themeSettings }>
            <Box />
        </ThemeProvider>
    </>
);

export default App;
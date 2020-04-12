// ./src/components/styled/Global.js
import { createGlobalStyle } from 'styled-components';

import robotoWoff from './../../fonts/roboto.woff';
import robotoWoff2 from './../../fonts/roboto.woff2';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${robotoWoff2}) format('woff2'),
             url(${robotoWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Roboto', Verdana, Tahoma, sans-serif;
        font-size: 1.6rem;
    }
`

export default GlobalStyle;
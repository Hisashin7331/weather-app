import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body {
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    body {
        height: 100vh;
        width: 100vw;
    }
`;

export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Satoshi', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle
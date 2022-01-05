import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000000;
        --orange: #FF9900;
        --tlo: #1a1a1a;
        --ciemny: #2D2D2D;
        --red-orange:#FF3D00;
        --check: #00FF0A;
    }


    body {
    min-width: 100px;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    overflow-x: scroll;
    background-color: var(--ciemny);
}


* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

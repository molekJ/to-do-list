import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000000;
        --orange: #FF9900;
        --dark-strong: #1a1a1a;
        --dark: #2D2D2D;
        --red-orange:#FF3D00;
        --checked: #00FF0A;
    }


    body {
    min-width: 100px;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    overflow-x: scroll;
    background-color: var(--dark-strong);
}


* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

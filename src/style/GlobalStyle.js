import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --clr-light-cyan: hsl(193, 38%, 86%);
        --clr-neon-green: hsl(150, 100%, 66%);
        --clr-grayish-blue: hsl(217, 19%, 38%);
        --clr-dark-grayish-blue: hsl(217, 19%, 24%);
        --clr-dark-blue: hsl(218, 23%, 16%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--clr-dark-blue);
        font-family: 'Manrope', sans-serif;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
`;

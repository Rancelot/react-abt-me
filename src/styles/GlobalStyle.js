import {createGlobalStyle} from 'styled-components';

// THIS IS TO CREATE A GLOBALIZED STYLE RESET FOR THE WHOLE PAGE
const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #ffb997;
        --secondary-color: #6c757d;
        --background-dark-color: #10122A;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --white-color: #FFF;
        --font-light-color: #756a65;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }

    h1 {
        font-size: 4rem;
        color: var(--white-color);
        span {
            font-size: 4rem;
        }
    }
    span {
        color: var(--primary-color);
    }

`;

export default GlobalStyle;
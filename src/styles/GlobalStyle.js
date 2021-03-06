import {createGlobalStyle} from 'styled-components';

// THIS IS TO CREATE A GLOBALIZED STYLE RESET FOR THE WHOLE PAGE
const GlobalStyle = createGlobalStyle`

    /* :root {
        --primary-color: #edac8c;
        --primary-color-light: #ffb996;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(232,140,95,0.3);
        --white-color: #FFF;
        --font-light-color: #ada59a;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thumb-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    } */

    .light-theme {
        --primary-color: #edac8c;
        --primary-color-light: #ffb996;
        --secondary-color: #6c757d;
        --background-dark-color: #F1F1F1;
        --background-dark-grey: #e4e4e4;
        --border-color: #cbced8;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(232,140,95,0.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thumb-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    .dark-theme {
        --primary-color: #edac8c;
        --primary-color-light: #ffb996;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(232,140,95,0.3);
        --white-color: #FFF;
        --font-light-color: #ada59a;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thumb-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;

        @media screen and (max-width: 1200px) {
            font-size: 1.1rem;
        }

        @media screen and (max-width: 600px) {
            font-size: 1rem;
        }
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    /* CUSTOM SCROLLBAR STYLING */
    body::-webkit-scrollbar {
        width: 9px;
        background-color: var(--scrollbar-bg-color);
    }

    body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--scrollbar-thumb-color);
    }

    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: var(--scrollbar-track-color);
    }
    /* END OF CUSTOM SCROLLBAR STYLING */

    a {
        font-family: inherit;
        color: inherit;
        /* font-size: inherit; */
        font-size: 1rem;
    }

    h1 {
        font-size: 4rem;
        color: var(--white-color);
        span {
            font-size: 4rem;
            @media screen and (max-width: 500px) {
                font-size: 2.8rem;
            }
        }

        @media screen and (max-width: 500px) {
            font-size: 3rem;
        }
    }
    span {
        color: var(--primary-color);
    }

    h6 {
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: 0.6rem;
    }

    //Utilities
    .u-margin-bottom {
        margin-bottom: 4rem;
    }

    //FLOATING TOGGLER

    .light-dark-mode {
        position: fixed;
        right: 0;
        top: 50%;
        background-color: var(--background-light-color-2);
        width: 6.5rem;
        height: 2.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            color: var(--white-color);
        }
    }

    //NAV TOGGLER
    .hamburger-menu {
        position: fixed;
        right: 3%;
        top: 3%;
        display: none;
        z-index: 15;
        svg {
            font-size: 3rem;
        }
    }

    .nav-toggle {
        transform: translateX(0);
        z-index: 20;
    }

    //GLOBAL MEDIA QUERIES (RESPONSIVE)
    @media screen and (max-width: 1200px) {
        .hamburger-menu {
            display: block;
        }
    }
`;

export default GlobalStyle;
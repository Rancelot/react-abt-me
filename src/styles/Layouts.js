import styled from "styled-components";

// THIS IS WHERE THE REUSABLE LAYOUTS WILL BE STORED
// NUMEROUS LAYOUTS CAN BE EXPORTED AND USED IN OTHER PAGES

export const MainLayout = styled.div`
    padding: 5rem;

    @media screen and (max-width: 640px) {
        padding: 4rem;
    }

    @media screen and (max-width: 540px) {
        padding: 3rem;
    }

    @media screen and (max-width: 520px) {
        padding: 2rem;
    }

    @media screen and (max-width: 480px) {
        padding: 1.5rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.7rem;
    }
`;

export const InnerLayout = styled.div`
    padding: 5rem 0;
`;
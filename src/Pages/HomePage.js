import React from 'react';
import styled from 'styled-components';
import Particles from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
    }
`;

export default HomePage

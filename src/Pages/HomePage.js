import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Rafael Angelo Pucut</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut nec pulvinar enim. Sed nibh odio, vulputate eu tempus vitae, ultrices.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/Rancelot" target="_blank" rel="noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .particle-con {
        position: absolute;
        top: 0;
        left: 0;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.4s ease-in-out;   //smoothness of showing hover color
                cursor: pointer;

                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }

                &:not(:last-child) {
                    margin-right: 1rem;
                    cursor: pointer;
                }

                svg {
                    margin: 0.5rem;
                }
            }

            .i-youtube {
                &:hover {
                    border: 2px solid #FF0100;
                    color: #FF0100;
                }
            }

            .i-github {
                &:hover {
                    border: 2px solid #35006B;
                    color: #35006B;
                }
            }

            .i-facebook {
                &:hover {
                    border: 2px solid #1877F2;
                    color: #1877F2;
                }
            }

        }
    }
`;

export default HomePage

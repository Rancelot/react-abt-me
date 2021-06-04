import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Rafael Angelo Pucut</span></h1>
                <p>
                    Full-Stack Developer, Anime Lover, and Gaming Enthusiast
                </p><br/>
                <p>You can find me through the links below:</p>
                <div className="icons">
                    <a href="https://ca.linkedin.com/in/rafael-angelo-pucut" target="_blank" rel="noreferrer" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/Rancelot" target="_blank" rel="noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="mailto:rpucut@gmail.com" className="icon i-email">
                        <EmailIcon />
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

            .i-email {
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

            .i-linkedin {
                &:hover {
                    border: 2px solid #0A66C2;
                    color: #0A66C2;
                }
            }

        }
    }
`;

export default HomePage

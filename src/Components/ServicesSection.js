import React from 'react';
import {InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/ux-interface.svg';
import frontend from '../img/web-design.svg';
import backend from '../img/servers.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'Determining how to improve the appearance, and layout of a website are the skills I am continuing to develop. Other mediums I love to design also include UX, UI, Mobile, Apps and Games. In order to visualize designs, the tools I use include Figma, Axure, Pen & Paper, Photoshop, and Gimp.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={frontend} 
                            title={'Front-End'} 
                            paragraph={'I take great interest and passion in creating or coding websites from zero in order to figure out how they should look and what content should appear. Languages I have learned include HTML, CSS, JavaScript, Reactjs and Bootstrap. Tools that I use for this are VSCode, Github, Bitbucket and the Terminal.'}
                        />
                    </div>
                    <ServiceCard 
                        image={backend} 
                        title={'Back-End'} 
                        paragraph={'Working on the core functionality of websites through creating APIs, and interacting with databases are challenges I love to tackle. Languages I have learned to nurture my skills are SQL, Nodejs, Java, and Python. The tools I use for this are Nodejs, Express, MySQL, myPhpAdmin, MongoDB, GCP.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;

        @media screen and (max-width: 1600px) {
            flex-direction: column;
        }

        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 680px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ServicesSection;

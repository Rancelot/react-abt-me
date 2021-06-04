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
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut elit congue, sodales quam nec, rutrum elit. Duis vitae suscipit.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={frontend} 
                            title={'Front-End'} 
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut elit congue, sodales quam nec, rutrum elit. Duis vitae suscipit.'}
                        />
                    </div>
                    <ServiceCard 
                        image={backend} 
                        title={'Back-End'} 
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut elit congue, sodales quam nec, rutrum elit. Duis vitae suscipit.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        .mid-card {
            margin: 0 1.2rem;
        }
    }
`;

export default ServicesSection;

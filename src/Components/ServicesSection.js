import React from 'react';
import {InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
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
                    <ServiceCard 
                        image={frontend} 
                        title={'Front-End'} 
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut elit congue, sodales quam nec, rutrum elit. Duis vitae suscipit.'}
                    />
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

`;

export default ServicesSection;

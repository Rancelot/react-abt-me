import React from 'react';
import styled from "styled-components";
import ImageSection from '../Components/ImageSection';
import ReviewsSection from '../Components/ReviewsSection';
import ServicesSection from '../Components/ServicesSection';
import Title from '../Components/Title';
import {MainLayout} from "../styles/Layouts";

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}/>
                <ImageSection />
                <ServicesSection />
                {/* <ReviewsSection /> */}
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;

export default AboutPage;

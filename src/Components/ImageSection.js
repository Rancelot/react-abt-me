import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src="" alt="resume image"/>
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Lorem Ipsum</span></h4>
                </div>
                <p className="paragraphy">
                    Lorem
                </p>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
`;

export default ImageSection;

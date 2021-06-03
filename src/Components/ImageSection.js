import React from 'react';
import styled from 'styled-components';
import aboutimg from '../img/about-img.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={aboutimg} alt="profile pic"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Rafael</span></h4>
                
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet facilisis faucibus. 
                    Quisque imperdiet interdum lectus, sed interdum velit mattis eu. Cras pharetra sem et mattis pretium.
                </p>
                
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age </p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Rafael Angelo Pucut</p>
                        <p>: 23 </p>
                        <p>: Filipino </p>
                        <p>: Tagalog, English </p>
                        <p>: Calgary, Alberta - Canada</p>
                        <p>: Software Development</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Resume'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;

    .left-content {
        width: 100%;
        img {
            width: 90%;
            object-fit: cover;  //so image doesnt stretch
        }
    }

    .right-content {
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }

        .paragraph {
            padding: 1rem 0;
        }

        .about-info {
            display: flex;
            padding-bottom: 1.4rem;

            .info-title {
                padding-right: 3rem;
                p {
                    font-weight: 600;
                }
            }

            .info-title, .info {
                p {
                    padding: 0.3rem 0;
                }
            }
        }
    }
`;

export default ImageSection;

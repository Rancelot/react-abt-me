import React from 'react';
import styled from 'styled-components';
import aboutimg from '../img/about-img.jpg';
import PrimaryButton from '../Components/PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={aboutimg} alt="profile pic"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Rafael</span></h4>
                
                <p className="paragraph">
                    I am a computer information systems graduate pursuing potential opportunities as a software developer. 
                    Through my experiences in academia and the workforce, I have attained some skills in front and back-end development. 
                    I am highly adaptable, have a keen desire for knowledge, and am constantly seeking to enhance my abilities step by step.
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
                <PrimaryButton title={'Download Resume'} link={'https://drive.google.com/file/d/1IOvESbSG_i8JpJuPL68pX6Oo_L-kemug/view?usp=sharing'}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;

    @media screen and (max-width: 1600px) {
        flex-direction: column;
        .left-content {
            margin-bottom: 2rem;
        }
    }

    .left-content {
        width: 100%;
        img {
            width: 89%;
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

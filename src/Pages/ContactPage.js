import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';


function ContactPage() {
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name">Enter your name*</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter your email*</label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Enter your subject*</label>
                                <input type="subject" id="subject"/>
                            </div>
                            <div className="text-area">
                                <label htmlFor="textarea">Enter your message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .form {
            width: 100%;

            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;

                label {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0.4rem 0.5rem;
                }

                input {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                }
            }
        }
    }
`;

export default ContactPage;

import React from 'react';
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <serviceCardStyled>
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </serviceCardStyled>
    )
}

const serviceCardStyled = styled.div`

`;

export default ServiceCard;

import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';


function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>

            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`

`;

export default ReviewsSection;

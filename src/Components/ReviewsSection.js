import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import ReviewItem from '../Components/ReviewItem';
import Title from '../Components/Title';


function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet turpis nec neque.'} 
                    />
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus laoreet enim sodales volutpat. Etiam ac magna tincidunt.'} 
                    />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;

        @media screen and (max-width: 680px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSection;

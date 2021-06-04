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
        display: flex;
    }
`;

export default ReviewsSection;

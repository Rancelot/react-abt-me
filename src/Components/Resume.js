import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import SmallTitle from '../Components/SmallTitle';
import Title from '../Components/Title';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {

    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />

    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'}/>
            <InnerLayout>
                <SmallTitle icon={briefcase} title={'Working Experience'} />
                <div className="resume-content">
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'Computer Science'}
                        subTitle={'MRU'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at convallis diam. Maecenas ipsum orci, volutpat vel posuere in, tristique.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`

`;

export default Resume;

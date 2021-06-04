import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from '../Components/ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'60%'}
                        text={'60%'} 
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'50%'}
                        text={'50%'} 
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'80%'}
                        text={'80%'} 
                    />
                    <ProgressBar
                        title={'JAVA'}
                        width={'75%'}
                        text={'75%'} 
                    />
                    <ProgressBar
                        title={'C#'}
                        width={'60%'}
                        text={'60%'} 
                    />
                    <ProgressBar
                        title={'PYTHON'}
                        width={'30%'}
                        text={'30%'} 
                    />
                    <ProgressBar
                        title={'REACT JS'}
                        width={'75%'}
                        text={'75%'} 
                    />
                    <ProgressBar
                        title={'NODE JS'}
                        width={'65%'}
                        text={'65%'} 
                    />
                    <ProgressBar
                        title={'PHP'}
                        width={'55%'}
                        text={'55%'} 
                    />
                    <ProgressBar
                        title={'GDSCRIPT'}
                        width={'30%'}
                        text={'30%'} 
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;

export default Skills;

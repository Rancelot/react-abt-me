import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <MainLayout>
                <Title title={'Resume'} span={'Resume'} />
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
            </MainLayout>
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

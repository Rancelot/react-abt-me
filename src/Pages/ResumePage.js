import React from 'react';
import Resume from '../Components/Resume';
import Skills from '../Components/Skills';
import { MainLayout } from '../styles/Layouts';


function ResumePage() {
    return (
        <MainLayout>
            <Resume />
            <Skills />
        </MainLayout>
    )
}

export default ResumePage;

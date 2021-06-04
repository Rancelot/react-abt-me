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
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'SEP 2019 - APR 2020'} 
                        title={'Web Developer Coop Student'}
                        subTitle={'Husky Energy Inc.'}
                        text={'I maintained and managed the company SharePoint intranet site by updating the content and adding any new pages, images, and news articles needed. I migrated a custom intranet site of the Information Services department into their latest intranet platform that uses SharePoint. I experimented, designed, and built new intranet pages for all the latest COVID-19 information which all company employees referred to for what procedures to follow. I collaborated with various teams from other departments to create their own webpages on the company intranet site. I documented all the tasks required to maintain their SharePoint intranet site.'} 
                    />
                    <ResumeItem 
                        year={'MAY 2019 - AUG 2019'} 
                        title={'Web Development Support Summer Student'}
                        subTitle={'Toole Peet Insurance'}
                        text={'I created an automated emailing feature using JavaScript with the Ultradox plugin in Google Drive in order to send reminder emails for the renewal of policies for the list of clients being monitored per month. I maintained a WordPress website by updating the plugins through migrating or modifying each plugin code depending on whether its customized or not through analyzing and comparing the PHP code. I updated a WordPress website by designing and creating the pages needed to setup a blog section to keep customers updated with the latest insurance news. I modified their new WordPress-based Intranet site by creating and organizing their knowledge base through Wiki Pages. I implemented a WordPress plugin called MailPoet to improve their Intranet to automate their latest important Blog Posts for all employees to see. I created a few Contacts pages for their different departments to organize all of their business contacts with the help of the Ivory Search Plugin to generate live AJAX based search bar. I used HTML, CSS and PHP to create their dynamically loaded PDF files for Certificates and Invoices.'} 
                    />
                    <div className="u-margin-bottom">
                        <ResumeItem 
                            year={'MAY 2018 - DEC 2018'} 
                            title={'Junior Developer'}
                            subTitle={'Jupiter Resources Inc.'}
                            text={'I programmed and optimized integration interfaces through the conversion of code from VB.NET into C# and adding extra features between software suites. Those features involve a logging feature to record when certain processes have been executed or have failed in the Windows Event Viewer, a file export feature to export the whole record in the Windows Event Viewer as a CSV file, an automated emailing feature to notify my supervisor that some process in the program has failed, and a timing feature which allows my supervisor to run these interfaces in a set schedule. I utilized the Spotfire API and created a website Dashboard through HTML, CSS, Sass, and JavaScript by integrating various data from different Spotfire Visualization documents to generate a unified view. I generated and Executed QA Tests between Spotfire versions. I authored software support documents for the programs I created during my time there.'} 
                        />
                    </div>
                </div>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'SEP 2016 - JUN 2021'} 
                        title={'Bachelor of Computer Information Systems'}
                        subTitle={'Mount Royal University'}
                        text={'During my time at Mount Royal, I took a series of computer science courses that broadened the skills I have in regards to programming, networks, and web development. I took a series of Java programming courses to learn about Object Oriented Programming, and data structures. I took some web development courses where I learned about Front-End and Back-End development. Some of the more senior courses taught me about UX design, Computer Security, Software Testing, and Games Development. This degree also had a combination of business courses which expanded my knowledge on a series of management, marketing, human resources, and accounting concepts as well which ended with me acquiring a minor in business.'} 
                    />
                    <ResumeItem 
                        year={'SEP 2013 - JUN 2016'} 
                        title={'High School Diploma'}
                        subTitle={'Bishop Carroll High School'}
                        text={'During my time in High School, I was proficient in Math and Sciences (Chemistry and Physics) as my strong subjects. It was a self-directed school where it was up to the student to determine what subjects they want to work on in a day so this helped me train my skills in managing my time in preparation for university. As for extracurriculars, I was in the Beginner Strings Ensemble in Grade 10 where I played the Violin, I took part in the Badminton Varsity Team for 3 years as a doubles player and I started volunteering at my local Church as an Audio Visual Technician.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }

    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;

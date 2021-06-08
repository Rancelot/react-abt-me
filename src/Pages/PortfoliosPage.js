import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState('');

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Menu menuItem={menuItem}/>
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage;

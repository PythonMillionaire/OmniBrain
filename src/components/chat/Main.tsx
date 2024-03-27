import React from 'react';
import LeftSection from './left-section/LeftSection';
import MiddleSection from './middle-section/MiddleSection';
import RightSection from './right-section/RightSection';

const Main = () => {
    return (
        <div id="main">
            <LeftSection />
            <MiddleSection />
            <RightSection />
            <div id="portal-root"></div>
        </div>
    );
};

export default Main;
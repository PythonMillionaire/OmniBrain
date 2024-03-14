import React from 'react';
import LeftSection from './left-section/LeftSection';
import MiddleSection from './middle-section/MiddleSection';
import RightSection from './right-section/RightSection';

const Main: React.FC = () => {
    return (
        <div id="main">
            <LeftSection />
            <MiddleSection />
            <RightSection />
        </div>
    );
};

export default Main;
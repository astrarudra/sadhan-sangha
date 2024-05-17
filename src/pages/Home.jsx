import React, { useEffect, useState } from 'react';
import { GurujiSection, AshramSection, SatsangSection, FollowUsSection } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth } from '../components/UIElements';

const Home = () => {
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWinWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const wFactor = winWidth >= 1000 ? 1 : winWidth / 1000;

    return (
        <BoxFixedWidth>
            <GurujiSection wFactor={wFactor} />
            <SSADivider />
            <h1>Sadhan Sangha Ashram</h1>
            <AshramSection />
            <SSADivider />
            <h1>Satsang</h1>
            <SatsangSection />
            <SSADivider />
            <h1>Follow Us</h1>
            <FollowUsSection />
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default Home;
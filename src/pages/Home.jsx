import React, { useEffect, useState } from 'react';
import { GurujiSection, AshramSection, SatsangSection, FollowUsBox } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth } from '../components/UIElements';
import { useStore } from '../appStore';

const Home = () => {
    const [yt] = useStore(s => [s.config.yt])
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
            <SatsangSection yt={yt}/>
            <FollowUsBox />
        </BoxFixedWidth>
    );
};

export default Home;
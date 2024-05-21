import React, { useEffect, useState } from 'react';
import { GurujiSection, AshramSection, SatsangSection, FollowUsBox } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth } from '../components/UIElements';
import { useStore } from '../appStore';
import { primaryInfo } from '../constants';
const { setState } = useStore.getState()

const Home = () => {
    const [yt, imgLoaded] = useStore(s => [s.config.yt, s.imgLoaded])
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

    const wFactor = winWidth >= 1000 ? 1 : winWidth / 1000
    return (
        <BoxFixedWidth>
            <GurujiSection wFactor={wFactor} />
            <SSADivider />
            <h1>{primaryInfo.title}</h1>
            <AshramSection wFactor={wFactor} onLoad={() => setState({imgLoaded: true}) }/>
            <SSADivider />
            <h1>{primaryInfo.sections.satsang}</h1>
            <SatsangSection yt={yt} loadIframe={imgLoaded}/>
            <FollowUsBox />
        </BoxFixedWidth>
    );
};

export default Home;
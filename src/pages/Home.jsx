import React, { useEffect, useState } from 'react';
import { GurujiSection, AshramSection, SatsangSection, FollowUsBox, FollowUsSection } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth } from '../components/UIElements';
import { useStore } from '../appStore';
const { setState } = useStore.getState()

const Home = () => {
    const [ config, imgLoaded ] = useStore(s => [s.config, s.imgLoaded])
    const { headers, primaryInfo: { title } } = config
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
            <h1>{title}</h1>
            <AshramSection wFactor={wFactor} onLoad={() => setState({imgLoaded: true}) }/>
            <SSADivider />
            <h1>{headers.satsang}</h1>
            <SatsangSection loadIframe={imgLoaded}/>
            <SSADivider />
            <h1>{headers.follow}</h1>
            <FollowUsSection />
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default Home;
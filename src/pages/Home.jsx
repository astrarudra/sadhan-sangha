import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as DividerSVG } from '../assets/divider.svg';
import { GurujiSection, AshramSection, SatsangSection, FollowUsSection } from '../components/HomeSections'

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
        <div style={{display: 'flex', justifyContent: "center"}}>
            <div style={{maxWidth: '1000px', textAlign: "center"}}>
                <GurujiSection wFactor={wFactor} />
                <Box className="svg-divider" sx={{pt: '15px'}}><DividerSVG /></Box>
                <Box className="font-freeman" style={{color: '#464038'}}><h1>Sadhan Sangha Ashram</h1></Box>
                <AshramSection />
                <Box className="svg-divider" sx={{pt: '15px'}}><DividerSVG /></Box>
                <Box className="font-freeman" style={{color: '#464038'}}><h1>Satsang</h1></Box>
                <SatsangSection />
                <Box className="svg-divider" sx={{pt: '15px'}}><DividerSVG /></Box>
                <Box className="font-freeman" style={{color: '#464038'}}><h1>Follow Us</h1></Box>
                <FollowUsSection />
                <Box className="svg-divider" sx={{pt: '15px'}}><DividerSVG /></Box>
            </div>
        </div>
    );
};

export default Home;
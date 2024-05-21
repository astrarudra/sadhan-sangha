import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SSADivider, FollowIcon, PrimeMusicIcon } from '../components/UIElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { socialLinks, primaryImgs, primaryInfo, CONSTS } from '../constants';
import { YTHeader } from './YTComponents';
import { scrollToTop } from '../helper';
import { Grid } from '@mui/material';
import ImgLazy from './ImgLazy';
import IFrameLazy from './IFrameLazy';

export const GurujiSection = ({wFactor}) => {
    const {guruji, boroGuruji, mataji} = primaryImgs
    return <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
        {[guruji, boroGuruji, mataji].map((img, i) => {
            return (
                <div key={i} style={{position: 'relative', height: 'max-content'}}>
                    <figure>
                        <ImgLazy src={img.src} alt={img.alt} width={parseInt(img.width * wFactor)} height={parseInt(img.height * wFactor)} bg={img.bg} load={true}/>
                    </figure>
                    <Box className={`clip-div ${i%2 === 0 ? 'reverse' : ''}`}>{img.alt}</Box>
                </div>
            )
        })}
    </div>
}

export const AshramSection = ({wFactor, onLoad}) => {
    const { ashram } = primaryImgs
    return <Link to={'/ashram'} style={{textDecoration: "none", color: "inherit"}} onClick={scrollToTop}>
    <div style={{position: 'relative'}}>
        <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure>
                <ImgLazy onLoad={onLoad} src={ashram.src} alt={ashram.alt} width={parseInt(ashram.width * wFactor)} height={parseInt(ashram.height * wFactor)} bg={ashram.bg} />
            </figure>
        </div>
        <Box className="ashram-text">
            Welcome to Sadhan Sangha Ashram, a sanctuary of peace and spiritual enlightenment. <br/>
            Discover the timeless wisdom and serene beauty of our Ashram, where seekers find solace, guidance, and inner transformation. <br/>
            Explore further to embark on a journey of spiritual discovery with us. <br/>
            <div style={{ textAlign: 'right', paddingTop: '10px' }}>
                <Button className="btn-primary"  size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>Read More</Button>
            </div>
        </Box>
    </div>
    </Link>
}

export const SatsangSection = ({yt, loadIframe}) => {
    const {podcast: ytPodcast} = yt;
    console.log("loadIframe LOAD - ", loadIframe)
    return (
    <div style={{position: 'relative'}}>
        <Box sx={{display: { xs: "block", sm: "flex"}}}>
            <div className="f1" style={{width:"100%"}}>
                <YTHeader mdText="Listen on Youtube" link={socialLinks.yt.l}/>
                <Box sx={{height: {md:"352px", sm: "352px", xs: "152px", position: "relative"}}}>
                    <div className="spotify-remove-border-radius" />
                    <IFrameLazy src={CONSTS.ytEmbed + ytPodcast} title={"YouTube Satsang Playlist"} bg="black" load={loadIframe}/>
                </Box>  
            </div>
            <div style={{width: '10px', height: '10px'}}></div>
            <div className="f1" style={{width:"100%"}}>
                <YTHeader mdText="Listen on Spotify" link={socialLinks.sp.l} linkText="Follow" iconify='logos:spotify-icon'/>
                <div style={{position: 'relative'}}>
                    <Box sx={{height: {md:"352px", sm: "352px", xs: "152px"}, position: "relative"}}>
                        <div className="spotify-remove-border-radius" />
                        <IFrameLazy src={CONSTS.spotifyPL} title={CONSTS.spotifyPLTitle} bg="black" load={loadIframe}/>
                    </Box>
                </div>
            </div>
        </Box>
        <Link to={'/satsang'} style={{textDecoration: "none", color: "inherit"}} onClick={scrollToTop}>
            <Box className="ashram-text">
                Discover Divine Insights at Sadhan Sangha Ashram. <br/> 
                Unveil the treasures of spiritual wisdom and tranquility within the sacred confines of Sadhan Sangha Ashram, where the luminous teachings of Guruji illuminate the path to enlightenment. <br/>
                Dive deeper into the spiritual journey with our extensive collection of soul-stirring satsangs from Guruji. <br />
                <div style={{ textAlign: 'right', paddingTop: '10px'}}>
                    <Button className="btn-primary" size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>Read More</Button>
                </div>
            </Box>
        </Link>
    </div>
    )
}

export const FollowUsSection = () => {
    const {fb, yt, ap, sp} = socialLinks
    return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
            {[fb, yt, sp].map((data, i) => <Grid item xs={6} sm={3}>
                <FollowIcon key={i} text={data.n} link={data.l} icon={data.i}/>
            </Grid>)}
            <Grid item xs={6} sm={3}>
                <PrimeMusicIcon ap={ap}/>
            </Grid>
        </Grid>
    </Box>
    );
};


export const FollowUsBox = () => {
    return <div>
        <SSADivider />
        <h1>{primaryInfo.sections.follow}</h1>
        <FollowUsSection />
        <SSADivider />
    </div>
}
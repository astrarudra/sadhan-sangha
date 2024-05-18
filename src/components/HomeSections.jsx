import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import { ResponsiveTypography, SSADivider, FollowIcon, PrimeMusicIcon } from '../components/UIElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { socialLinks, primaryImgs, imgurImages } from '../constants';
import { YTHeader, YTIFrame } from './YTComponents';
import { scrollToTop } from '../helper';
import { Grid } from '@mui/material';

export const GurujiSection = ({wFactor}) => {
    return <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
        {primaryImgs.map((img, i) => {
            return (
                <div key={i} style={{position: 'relative', height: 'max-content'}}>
                    <figure>
                        <img 
                            src={img.src} alt={img.alt} 
                            height={parseInt(img.height * wFactor)} width={parseInt(img.width * wFactor)}
                        />
                    </figure>
                    <Box className={`clip-div ${i%2 === 0 ? 'reverse' : ''}`}>{img.alt}</Box>
                </div>
            )
        })}
    </div>
}

export const AshramSection = () => {
    return <Link to={'/ashram'} style={{textDecoration: "none", color: "inherit"}} onClick={scrollToTop}>
    <div style={{position: 'relative'}}>
        <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure><img src={imgurImages.ashram} alt="Ashram" style={{width: '100%'}}/></figure>
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

export const SatsangSection = ({yt}) => {
    const {podcast: ytPodcast} = yt;
    return (
    <div style={{position: 'relative'}}>
        <Box sx={{display: { xs: "block", sm: "flex"}}}>
            <div className="f1" style={{width:"100%"}}>
                <YTHeader mdText="Listen on Youtube" link={socialLinks.yt.l}/>
                <Box sx={{height: {md:"352px", sm: "352px", xs: "152px"}}}>
                    <YTIFrame title="YouTube Satsang Playlist" embed={ytPodcast} height="100%"/>
                </Box>  
            </div>
            <div style={{width: '10px', height: '10px'}}></div>
            <div className="f1" style={{width:"100%"}}>
                <YTHeader mdText="Listen on Spotify" link={socialLinks.sp.l} linkText="Follow" iconify='logos:spotify-icon'/>
                <div style={{position: 'relative'}}>
                    <Box sx={{height: {md:"352px", sm: "352px", xs: "152px"}, position: "relative"}}>
                        <div className="spotify-remove-border-radius"></div>
                        <iframe width="100%" height="100%" title="Spotify Satsang Playlist" frameborder="0" src="https://open.spotify.com/embed/show/2ZObyJtMT9202nOOIazkmv?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowfullscreen></iframe>
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
        <h1>Follow Us</h1>
        <FollowUsSection />
        <SSADivider />
    </div>
}
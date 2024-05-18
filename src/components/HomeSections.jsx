import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import { ResponsiveTypography, SSADivider } from '../components/UIElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { socialLinks, primaryImgs } from '../constants';
import { YTHeader, YTIFrame } from './YTComponents';

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
    return <Link to={'/ashram'} style={{textDecoration: "none", color: "inherit"}}>
    <div style={{position: 'relative'}}>
        <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure><img src="https://i.imgur.com/0fOBbqh.jpg" alt="Ashram" style={{width: '100%'}}/></figure>
        </div>
        <Box className="ashram-text">
            Welcome to Sadhan Sangha Ashram, a sanctuary of peace and spiritual enlightenment nestled between the sacred towns of Rishikesh and Haridwar. <br/>
            Our story is one of divine inspiration and humble beginnings, guided by the luminous presence of Yogi 108 Swami Sachchidananda Saraswati. <br/>
            Discover the timeless wisdom and serene beauty of our Ashram, where seekers find solace, guidance, and inner transformation. <br/>
            Click "Read More" to embark on a journey of spiritual discovery with us.
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
        <Link to={'/satsang'} style={{textDecoration: "none", color: "inherit"}}>
            <Box className="ashram-text">
                Discover Divine Insights at Sadhan Sangha Ashram <br/> 
                Unveil the treasures of spiritual wisdom and tranquility within the sacred confines of Sadhan Sangha Ashram. <br />
                Immerse yourself in the transformative power of satsangs, where the luminous teachings of Guruji illuminate the path to enlightenment. <br/>
                Click "Read More" to embark on a sacred journey of inner exploration with soul-stirring satsangs from our Guruji. <br />
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
        <Box sx={{display: { xs: "block", sm: "flex"}, padding: "15px 0px"}}>
            <div className="d-flex f1">
                <div class="follow-logo" onClick={() => window.open(socialLinks.fb.l, "_blank")}>
                    <Icon icon={fb.i} style={{fontSize: '64px'}}/>
                    <div className="font-freeman">{fb.n}</div>
                </div>
                <div class="follow-logo" style={{marginLeft: '10px'}} onClick={() => window.open(yt.l, "_blank")}>
                    <Icon icon={yt.i} style={{fontSize: '64px'}}/>
                    <div className="font-freeman">{yt.n}</div>
                </div>
            </div>
            <div style={{width: '0px', height: '10px'}}></div>
            <div className="d-flex f1">
                <div class="follow-logo" style={{marginLeft: '10px'}} onClick={() => window.open(sp.l, "_blank")}>
                    <Icon icon={sp.i} style={{fontSize: '64px'}}/>
                    <div className="font-freeman">{sp.n}</div>
                </div>
                <div class="follow-logo" style={{marginLeft: '10px'}} onClick={() => window.open(ap.l, "_blank")}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="prime-music">
                            <Icon icon={ap.i} style={{fontSize: '50px'}}/>
                        </div>
                    </div>
                    <ResponsiveTypography mdText={ap.n} smText={ap.n2}  className="font-freeman" sx={{fontSize: '20px'}}/>
                </div>
            </div>
        </Box>
    )
}

export const FollowUsBox = () => {
    return <div>
        <SSADivider />
        <h1>Follow Us</h1>
        <FollowUsSection />
        <SSADivider />
    </div>
}
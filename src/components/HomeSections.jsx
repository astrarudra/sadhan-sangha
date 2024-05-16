import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ResponsiveTypography } from '../components/UIElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const w1 = 335;
const w2 = 355;
const w3 = 310;

const primaryImgs = [
    {
        src: "https://i.imgur.com/dSGzChL.jpg",
        alt: "Guruji",
        height: w1 * 1.29,
        width: w1,
        
    },
    {
        src: "https://i.imgur.com/GtJ3TKa.jpg",
        alt: "Param Guruji",
        height: w2 * 1.29,
        width: w2,
    },
    {
        src: "https://i.imgur.com/wjB9qkj.jpg",
        alt: "Mataji",
        height: w3 * 1.29,
        width: w3,
    }
]

const socialLinks = {
    fb: "https://facebook.com/SadhanSangha",
    yt: "https://youtube.com/@SadhanSangha",
    sp: "https://open.spotify.com/show/2ZObyJtMT9202nOOIazkmv",
    ap: "https://music.amazon.in/podcasts/4e808bb9-cbf0-4fd8-8d83-b0c16e67980b"
}

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
            <div style={{ textAlign: 'right' }}>
                <Button className="btn-primary"  size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>Read More</Button>
            </div>
        </Box>
    </div>
    </Link>
}

export const SatsangSection = () => {
    return (
    <div style={{position: 'relative'}}>
        <div style={{display: 'flex'}}>
            <div style={{width:"50%", paddingRight: '10px', cursor: "pointer"}} onClick={() => window.open(socialLinks.yt, "_blank")}>
                <div className="iframe-header font-freeman">
                    <Icon icon="logos:youtube-icon" style={{paddingRight: '10px'}}/>
                    <ResponsiveTypography mdText="Listen on Youtube" xsText=""  className="font-freeman"/>
                    <div style={{marginLeft: "auto"}}>Subscribe</div>
                    <OpenInNewIcon style={{paddingLeft: '10px'}}/>
                </div>
                <iframe width="100%" height="352" title="YouTube Satsang Playlist" frameborder="0" src="https://www.youtube.com/embed/videoseries?si=KKcbbq8bfewEJ6F_&amp;list=PL_MOImlZCzxj05BtkOrCvyrhHOnQVU1o-" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div style={{width:"50%", cursor: "pointer"}} onClick={() => window.open(socialLinks.sp, "_blank")}>
                <div className="iframe-header font-freeman"> 
                    <Icon icon="logos:spotify-icon" style={{paddingRight: '10px'}} /> 
                    <ResponsiveTypography mdText="Listen on Spotify" xsText=""  className="font-freeman"/>
                    <div style={{marginLeft: "auto"}}>Follow</div>
                    <OpenInNewIcon style={{paddingLeft: '10px'}}/>
                </div>
                <div style={{position: 'relative'}}>
                    <div className="spotify-remove-border-radius"></div>
                    <iframe width="100%" height="352" title="Spotify Satsang Playlist" frameborder="0" src="https://open.spotify.com/embed/show/2ZObyJtMT9202nOOIazkmv?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowfullscreen></iframe>
                </div>
               
            </div>
        </div>
        <Link to={'/satsang'} style={{textDecoration: "none", color: "inherit"}}>
            <Box className="ashram-text">
                Discover Divine Insights at Sadhan Sangha Ashram <br/> 
                Unveil the treasures of spiritual wisdom and tranquility within the sacred confines of Sadhan Sangha Ashram. <br />
                Immerse yourself in the transformative power of satsangs, where the luminous teachings of Guruji illuminate the path to enlightenment. <br/>
                Click "Read More" to embark on a sacred journey of inner exploration with soul-stirring satsangs from our Guruji. <br />
                <div style={{ textAlign: 'right'}}>
                    <Button className="btn-primary" size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>Read More</Button>
                </div>
            </Box>
        </Link>
    </div>
    )
}

export const FollowUsSection = () => {
    return (
        <div style={{display: "flex", padding: '15px 0px'}}>
            <div class="follow-logo" onClick={() => window.open(socialLinks.fb, "_blank")}>
                <Icon icon="logos:facebook" style={{fontSize: '64px'}}/>
                <div className="font-freeman">Facebook</div>
            </div>
            <div class="follow-logo" style={{marginLeft: '10px'}} onClick={() => window.open(socialLinks.yt, "_blank")}>
                <Icon icon="logos:youtube-icon" style={{fontSize: '64px'}}/>
                <div className="font-freeman">Youtube</div>
            </div>
            <div class="follow-logo" style={{marginLeft: '10px'}} onClick={() => window.open(socialLinks.sp, "_blank")}>
                <Icon icon="logos:spotify-icon" style={{fontSize: '64px'}}/>
                <div className="font-freeman">Spotify</div>
            </div>
            <div class="follow-logo" style={{marginLeft: '10px'}} onClick={() => window.open(socialLinks.ap, "_blank")}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="prime-music">
                        <Icon icon="simple-icons:prime" style={{fontSize: '50px'}}/>
                    </div>
                </div>
                <ResponsiveTypography mdText="Amazon Prime Music" smText="Music"  className="font-freeman" sx={{fontSize: '20px'}}/>
            </div>
        </div>
    )
}
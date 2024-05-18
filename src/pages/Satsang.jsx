import React from 'react';
import { BoxFixedWidth, ResponsiveTypography, SSADivider } from '../components/UIElements';
import { Box } from '@mui/material';
import { socialLinks } from '../constants';
import { YTHeader, YTIFrame, YTPlaylistBox } from '../components/YTComponents';
import { useStore } from '../appStore';
import { Icon } from '@iconify/react';

const SatsangInfo = () => {
    return <Box sx={{textAlign: 'left', flex: 1, paddingLeft: '20px', height: "max-content"}}>
        <SSADivider className='svg-divider dark-varient'/>
        <b>Satsangs and Teachings</b><br />
        <br />
        At Sadhan Sangha Ashram, satsangs are the cornerstone of our spiritual practice, offering profound guidance and transformative insights. Each satsang session with Guruji is a journey into the depths of spiritual wisdom, focusing on the ultimate goal of enlightenment (Brahma Gyan) and the steps needed to attain it.<br />
        <br />
        <b>Path to Enlightenment</b><br />
        <br />
        In his teachings, Guruji emphasizes the importance of enlightenment as the highest purpose of human life. Through his profound discourses, Guruji explains how enlightenment is not just a distant goal but a tangible state of being that we can work towards in our daily lives. He elucidates the concept of Brahma Gyan, the knowledge of the ultimate reality, and provides practical guidance on how to pursue this path.<br />
        <br />
        <b>The Role of Meditation</b><br />
        <br />
        Meditation is a central theme in Guruji's teachings. According to Guruji, meditation is the key to purifying the mind and eliminating negative thoughts. Through regular meditation practice, we can achieve a state of inner peace and clarity, essential for spiritual growth. Guruji provides practical techniques and tips for meditation, making it accessible for everyone, regardless of their experience level.<br />
        <br />
        <b>Living a Good Life</b><br />
        <br />
        Guruji's satsangs also offer invaluable advice on how to live a good and stress-free life. He teaches us how to cultivate positive qualities, manage stress, and maintain a balanced life. By following Guruji's guidance, we learn to navigate the challenges of life with grace and resilience, fostering a sense of well-being and contentment.<br />
        <br />
        <b>Transformative Power of Satsangs</b><br />
        <br />
        Each satsang is a transformative experience, providing attendees with the tools and knowledge needed to embark on their spiritual journey. The luminous teachings of Guruji illuminate the path to self-discovery and inner awakening, offering profound insights that resonate deeply with the soul.<br />
        <SSADivider className='svg-divider dark-varient'/>
    </Box>
}

const SatsangPage = () => {
    const [uTube] = useStore(s => [s.config.yt])
    const { satsangHeaderVid, podcast, playlists } = uTube;
    const { ap, sp} = socialLinks
    return (
        <BoxFixedWidth>
            <h1>Satsang</h1>
            <Box sx={{height: { xs: '200px', sm: '340px', md: '562px', lg: '562px'}}}>
                <figure style={{height: '100%'}}>
                    <YTIFrame title="Youtube Latest Video Satsang" embed={satsangHeaderVid} />
                </figure>
            </Box>
            <div style={{paddingTop: '40px'}}>
                <Box className="card d-flex" sx={{display: { xs: "block", sm: "flex"}}}>
                    <div className="f1">
                        <div style={{width:"100%"}}>
                            <YTHeader mdText="Daily Satsang" link={socialLinks.yt.l}/>
                            <Box sx={{height: {md:"352px", sm: "352px", xs: "152px"}, paddingBottom: '5px'}}>
                                <YTIFrame title="YouTube Satsang Playlist" embed={podcast} />
                            </Box>
                        </div>
                        {playlists.reverse().map((data, i) => <YTPlaylistBox key={i} data={data}/>)}
                        <h2>Also Available At</h2>
                        <Box sx={{display: {md:"flex", xs: "block", sm: "block"}, padding: '0px 15px 15px'}}>
                            <div class="follow-logo f1" onClick={() => window.open(sp.l, "_blank")}>
                                <Icon icon={sp.i} style={{fontSize: '64px'}}/>
                                <div className="font-freeman">{sp.n}</div>
                            </div>
                            <div style={{width:"15px", height:"15px"}}></div>
                            <div class="follow-logo f1" onClick={() => window.open(ap.l, "_blank")}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="prime-music">
                                        <Icon icon={ap.i} style={{fontSize: '50px'}}/>
                                    </div>
                                </div>
                                <ResponsiveTypography mdText={ap.n} smText={ap.n2}  className="font-freeman" sx={{fontSize: '20px'}}/>
                            </div>
                        </Box>
                    </div>
                    <SatsangInfo />
                </Box>
                <SSADivider />
            </div>
        </BoxFixedWidth>
    );
};

export default SatsangPage;
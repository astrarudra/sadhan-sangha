import React from 'react';
import { BoxFixedWidth, FollowIcon, PrimeMusicIcon, SSADivider } from '../components/UIElements';
import { Box, Grid } from '@mui/material';
import { YTHeader, YTPlaylistBox } from '../components/YTComponents';
import { useStore } from '../appStore';
import IFrameLazy from '../components/IFrameLazy';

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
    const [uTube, socialLinks, CONSTS] = useStore(s => [s.config.yt, s.config.socialLinks, s.config.CONSTS])
    const { satsangHeaderVid, podcast, playlists } = uTube;
    const { ap, sp} = socialLinks
    return (
        <BoxFixedWidth>
            <h1>Satsang</h1>
            <Box sx={{height: { xs: '200px', sm: '340px', md: '562px', lg: '562px'}}}>
                <figure style={{height: '100%'}}>
                    <Box sx={{bgcolor: "black", height: "100%", width: "100%"}}>
                        <IFrameLazy title="Youtube Latest Video Satsang" src={CONSTS.ytEmbed + satsangHeaderVid} load={true} />
                    </Box>
                </figure>
            </Box>
            <div style={{paddingTop: '40px'}}>
                <Box className="card d-flex" sx={{display: { xs: "block", sm: "flex"}}}>
                    <div className="f1">
                        <div style={{width:"100%"}}>
                            <YTHeader mdText="Daily Satsang" link={socialLinks.yt.l}/>
                            <Box sx={{height: {md:"352px", sm: "352px", xs: "152px"}, marginBottom: '5px', bgcolor:"black"}}>
                                <IFrameLazy title="YouTube Satsang Playlist" src={CONSTS.ytEmbed + podcast} />
                            </Box>
                        </div>
                        {[...playlists].reverse().map((data, i) => <YTPlaylistBox key={i} data={data}/>)}
                        <h2>Also Available At</h2>
                        <Box sx={{ flexGrow: 1, p: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <FollowIcon text={sp.n} icon={sp.i} link={sp.l}/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <PrimeMusicIcon ap={ap}/>
                                </Grid>
                            </Grid>
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
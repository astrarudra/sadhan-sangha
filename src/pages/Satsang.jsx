import React from 'react';
import { BoxFixedWidth, FollowIcon, Md, PrimeMusicIcon, SSADivider } from '../components/UIElements';
import { Box, Grid } from '@mui/material';
import { YTHeader, YTPlaylistBox } from '../components/YTComponents';
import { useStore } from '../appStore';
import IFrameLazy from '../components/IFrameLazy';

const SatsangInfo = ({text}) => {
    return <Box sx={{textAlign: 'left', flex: 1, paddingLeft: '20px', height: "max-content"}}>
        <SSADivider className='svg-divider dark-varient'/>
        <Md>{text}</Md>
        <SSADivider className='svg-divider dark-varient'/>
    </Box>
}

const SatsangPage = () => {
    const [config, texts] = useStore(s => [s.config, s.texts])
    const { headers, satsang } = texts
    const {yt: uTube, socialLinks, CONSTS} = config
    const { satsangHeaderVid, podcast, playlists } = uTube;
    const { ap, sp} = socialLinks
    return (
        <BoxFixedWidth>
            <h1>{headers.satsang}</h1>
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
                    <SatsangInfo text={satsang} />
                </Box>
                <SSADivider />
            </div>
        </BoxFixedWidth>
    );
};

export default SatsangPage;
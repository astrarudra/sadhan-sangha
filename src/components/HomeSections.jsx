import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FollowIcon, Md, PrimeMusicIcon } from '../components/UIElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { YTHeader } from './YTComponents';
import { scrollToTop } from '../helper';
import { Grid } from '@mui/material';
import ImgLazy from './ImgLazy';
import IFrameLazy from './IFrameLazy';
import { useStore } from '../appStore';

export const GurujiSection = ({wFactor}) => {
    const [ headers, primaryImgs ] = useStore(s => [s.texts.headers, s.config.primaryImgs])
    const {guruji, boroGuruji, mataji} = primaryImgs
    return <div className="hover01 column" style={{display: "flex", justifyContent: "center"}}>
        {[guruji, boroGuruji, mataji].map((img, i) => {
            return (
                <div key={i} style={{position: 'relative', height: 'max-content'}}>
                    <figure>
                        <ImgLazy src={img.src} alt={img.alt} width={parseInt(img.width * wFactor)} height={parseInt(img.height * wFactor)} bg={img.bg} load={true}/>
                    </figure>
                    <Box className={`clip-div ${i%2 === 0 ? 'reverse' : ''}`}>{headers[img.key]}</Box>
                </div>
            )
        })}
    </div>
}

export const AshramSection = ({wFactor, onLoad}) => {
    const [ primaryImgs, texts ] = useStore(s => [s.config.primaryImgs, s.texts])
    const { ashram } = primaryImgs
    const { headers, ashramShort } = texts
    return <Link to={'/ashram'} style={{textDecoration: "none", color: "inherit"}} onClick={scrollToTop}>
    <div style={{position: 'relative'}}>
        <div className="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure>
                <ImgLazy onLoad={onLoad} src={ashram.src} alt={ashram.alt} width={parseInt(ashram.width * wFactor)} height={parseInt(ashram.height * wFactor)} bg={ashram.bg} />
            </figure>
        </div>
        <Box className="ashram-text">
            <Md>{ashramShort}</Md>
            <div style={{ textAlign: 'right', paddingTop: '10px' }}>
                <Button className="btn-primary"  size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>{headers.readMore}</Button>
            </div>
        </Box>
    </div>
    </Link>
}

export const SatsangSection = ({loadIframe}) => {
    const [texts, config ] = useStore(s => [s.texts, s.config])
    const { headers, satsangShort } = texts
    const {yt, socialLinks, CONSTS } = config
    const {podcast: ytPodcast} = yt;
    return (
    <div style={{position: 'relative'}}>
        <Box sx={{display: { xs: "block", sm: "flex"}}}>
            <div className="f1" style={{width:"100%"}}>
                <YTHeader mdText={headers.listenYT} link={socialLinks.yt.l} linkText={headers.subscribe}/>
                <Box sx={{height: {md:"352px", sm: "352px", xs: "152px", position: "relative"}}}>
                    <div className="spotify-remove-border-radius" />
                    <IFrameLazy src={CONSTS.ytEmbed + ytPodcast} title={"YouTube Satsang Playlist"} bg="black" load={loadIframe}/>
                </Box>  
            </div>
            <div style={{width: '10px', height: '10px'}}></div>
            <div className="f1" style={{width:"100%"}}>
                <YTHeader mdText={headers.listenSP} link={socialLinks.sp.l} linkText={headers.follow} iconify='logos:spotify-icon'/>
                <div style={{position: 'relative'}}>
                    <Box sx={{height: {md:"352px", sm: "352px", xs: "152px"}, position: "relative"}}>
                        <div className="spotify-remove-border-radius" />
                        <IFrameLazy src={CONSTS.spotifyPL} title={CONSTS.spotifyPLTitle} bg="black" load={loadIframe}/>
                    </Box>
                </div>
            </div>
        </Box>
        <Link to={'/satsang'} style={{textDecoration: "none", color: "inherit"}} onClick={scrollToTop}>
            <Box className="ashram-text">{satsangShort}
                <div style={{ textAlign: 'right', paddingTop: '10px'}}>
                    <Button className="btn-primary" size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>{headers.readMore}</Button>
                </div>
            </Box>
        </Link>
    </div>
    )
}

export const FollowUsSection = () => {
    const [ socialLinks, socialNames ] = useStore(s => [s.config.socialLinks, s.texts.socialNames])
    const {fb, yt, ap, sp} = socialLinks
    return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
            {Object.keys({fb, yt, sp}).map((key) => {
            const {l, i} = socialLinks[key]
            return <Grid item xs={6} sm={3}>
                <FollowIcon key={i} text={socialNames[key].n} link={l} icon={i}/>
            </Grid>
            })}
            <Grid item xs={6} sm={3}>
                <PrimeMusicIcon ap={ap} apn={socialNames.ap}/>
            </Grid>
        </Grid>
    </Box>
    );
};
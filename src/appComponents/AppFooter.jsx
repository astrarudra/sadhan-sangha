import React from 'react';
import { SSALogoIcon } from '../components/UIElements';
import { useStore } from '../appStore';
import { Link } from 'react-router-dom';
import ReachUs from "../components/ReachUs"
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { scrollToTop } from '../helper';
import ImgLazy from '../components/ImgLazy';

const thisYear = new Date().getFullYear()
const NoWrap = ({children}) => <span style={{whiteSpace: 'nowrap'}}>{children}</span>

const responsiveStyle = {
    display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}, 
    opacity: { md: 0.1, lg: 0.3},
}

const FooterImages = ({primaryImgs, load}) => {
    const { shiva, bwGuruji } = primaryImgs
    return <div>
        <Box className="shiva-footer" sx={responsiveStyle}>
            <ImgLazy src={shiva.src} alt={shiva.alt} height="100%" bg={false} load={load}/>
        </Box>
        <Box className="logo-footer" sx={{opacity: {sm: 0.05, xs: 0.05, md: 0.1, lg: 0.1}, left: "calc(50% - 100px)"}}>
            <SSALogoIcon variant='variant-white' sx={{maxWidth: '200px'}}/>
        </Box>
        <Box className="shiva-footer" sx={{...responsiveStyle, right: 0, left: "inherit" }}>
            <img src={bwGuruji.src} alt={bwGuruji.alt} height="100%"/>
        </Box>
    </div>
}

const FooterBottomSection = () => {
    const [ footer ] = useStore(s => [s.texts.footer])
    const { privacy, dev, devName, devLink, startYear, cc} = footer
    return ( <div className="footer-bottom">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ textAlign: 'left'}}>
            <a href={devLink} target="_blank" rel="noopener noreferrer" className="link">
                <Box sx={{padding: {xs: "10px 15px 0px 15px", sm: "10px 15px"}, textAlign: {xs: 'center', sm: "left"}}}>
                    {dev} <NoWrap>{devName}</NoWrap>
                </Box>
            </a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{padding: 0}}>
            <Box sx={{ padding: {xs: 0, sm: "10px 15px"}}}>
            {`© ${startYear} - ${thisYear}`} {cc}
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ textAlign: {xs: 'center', sm: "right"}}}>
            <Link to="/privacy" className="link" onClick={scrollToTop}>
                <Box sx={{padding: {xs: "0px 15px 10px 15px", sm: "10px 15px"}}}>
                    {privacy}
                </Box>
            </Link>
            </Box>
          </Grid>
        </Grid>
    </div>
    );
}

const FooterNavigation = ({title, pages}) => {
    return <div style={{ maxWidth: '100px'}}>
         <div className="footer-header">{title}</div>
        {Object.keys(pages).map((key) => {
            const { name, path, Icon, hidden } = pages[key]
            if(hidden) return null
            return <Link to={path} className="link" onClick={scrollToTop}>
                <div className="v-center footer-social">
                    <Icon className="footer-social-icons" />
                    <div>{name}</div>
                </div>
            </Link>
        })}
    </div>
}

const FooterFollowUs = ({title, socialLinks, socialNames}) => {
    return <div>
        <div className="footer-header">{title}</div>
        {Object.keys(socialLinks).map((key) => {
            const { i, l } = socialLinks[key]
            return <div className="v-center footer-social" onClick={() => window.open(l, "_blank")}>
                <Icon className={"footer-social-icons"} icon={i}/>
                <div>{socialNames[key].n}</div>
            </div>
        })}
    </div>
}

const MainFooter = () => {
    const [pages, imgLoaded, config, texts ] = useStore(s => [s.pages, s.imgLoaded, s.config, s.texts])
    const { primaryImgs = {}, socialLinks = {} } = config
    const { headers = {}, socialNames } = texts
    return (
      <Box className="footer d-flex" sx={{justifyContent: 'center'}}>
        <FooterImages primaryImgs={primaryImgs} load={imgLoaded}/>
        <Grid container spacing={2} sx={{maxWidth: '1000px', zIndex: 1}}>
          <Grid item xs={12} sm={4} md={3}>
            <ReachUs />
          </Grid>
          <Grid item xs={12} sm={2} md={5}>
            <Box>
                <div className="footer-header">{headers.downloadApp}</div>
                <div className="v-center footer-social"> Coming Soon </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <FooterFollowUs title={headers.followUs} socialLinks={socialLinks} socialNames={socialNames}/>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
                <FooterNavigation title={headers.navigate} pages={pages} />
          </Grid>
        </Grid>
      </Box>
    );
};

const Footer = () => {
    return <footer>
        <MainFooter />
        <FooterBottomSection />
    </footer>
}

export default Footer;
import React from 'react';
import { SSALogoIcon } from '../components/UIElements';
import { useStore } from '../appStore';
import { Link } from 'react-router-dom';
import ReachUs from "../components/ReachUs"
import { imgurImages, socialLinks } from '../constants';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { scrollToTop } from '../helper';

const thisYear = new Date().getFullYear()
const NoWrap = ({children}) => <span style={{whiteSpace: 'nowrap'}}>{children}</span>

const responsiveStyle = {
    display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}, 
    opacity: { md: 0.1, lg: 0.3},
}

const FooterImages = () => {
    return <div>
        <Box className="shiva-footer" sx={responsiveStyle}>
            <img src={imgurImages.shiva} alt="Shiva Sandhan Sangha Ashram" height="100%"/>
        </Box>
        <Box className="logo-footer" sx={{opacity: {sm: 0.05, xs: 0.05, md: 0.1, lg: 0.1}, left: "calc(50% - 100px)"}}>
            <SSALogoIcon variant='variant-white' sx={{maxWidth: '200px'}}/>
        </Box>
        <Box className="shiva-footer" sx={{...responsiveStyle, right: 0, left: "inherit" }}>
            <img src={imgurImages.bwGuruji} alt="Guruji Sandhan Sangha Ashram" height="100%"/>
        </Box>
    </div>
}

const FooterBottomSection = () => {
    return ( <div className="footer-bottom">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ textAlign: 'left'}}>
            <a href="https://github.com/astrarudra/sadhan-sangha" target="_blank" rel="noopener noreferrer" className="link">
                <div style={{padding: "10px 15px"}}>
                    Developed By <NoWrap>Rudra Roy</NoWrap>
                </div>
            </a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ padding: "10px 15px"}}>
            {`© 2005 - ${thisYear}`} Sadhan Sangha Ashram. All Rights Reserved.
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ textAlign: 'right'}}>
            <Link to="/privacy" className="link" onClick={scrollToTop}>
)>
                <div style={{padding: "10px 15px"}}>
                    Privacy Policy
                </div>
            </Link>
            </Box>
          </Grid>
        </Grid>
    </div>
    );
}

const FooterNavigation = ({pages}) => {
    return <div style={{ maxWidth: '100px'}}>
         <div className="footer-header"> Navigation </div>
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

const FooterFollowUs = () => {
    return <div>
        <div className="footer-header"> Follow Us </div>
        {Object.keys(socialLinks).map((key) => {
            const { i, n, l } = socialLinks[key]
            return <div className="v-center footer-social" onClick={() => window.open(l, "_blank")}>
                <Icon className={"footer-social-icons"} icon={i}/>
                <div>{n}</div>
            </div>
        })}
    </div>
}

const MainFooter = () => {
    const [pages] = useStore(s => [s.pages])
    return (
      <Box className="footer d-flex" sx={{justifyContent: 'center'}}>
        <FooterImages />
        <Grid container spacing={2} sx={{maxWidth: '1000px', zIndex: 1}}>
          <Grid item xs={12} sm={4} md={3}>
            <ReachUs />
          </Grid>
          <Grid item xs={12} sm={2} md={5}>
            <Box>
                <div className="footer-header"> Download App </div>
                <div className="v-center footer-social"> Coming Soon </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <FooterFollowUs />
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
                <FooterNavigation pages={pages} />
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
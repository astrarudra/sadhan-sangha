import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactComponent as SSADividerSVG } from '../assets/ssaDivider.svg';
import { ReactComponent as SSALogo } from '../assets/ssaLogo.svg';
import { Icon } from '@iconify/react';
import Markdown from 'react-markdown'
import { Skeleton } from '@mui/material';

export const SSALogoIcon = ({variant = 'variant-brown', sx}) => {
    return <Box className={`logo-wrap ${variant}`} sx={sx}>
        <SSALogo />
    </Box>
}


export const InitLoader = ({ className="d-center fs", text="Loading"}) => (<div className={className} style={{color: '#f3d9c3'}}>
  <div style={{margin: "10px"}}>
    <img src="https://i.imgur.com/HQ4lLtk.png" alt="Sadhan Sangha Ashram Logo" width="300px" height="300px" />
    <h1>{text}</h1>
    <div className="h-center" style={{margin: '5px'}}>
      <div className="loader"></div>
    </div>
  </div>
</div>)

export const ResponsiveTypography = ({ mdText, smText, xsText, sx = {}, ...props }) => {
    if(smText === undefined) smText = mdText;
    if(xsText === undefined) xsText = smText;
    return (
        <>
            <Typography {...props} sx={{ display: { xs: 'none', sm: 'none', md: 'block', ...sx } }}>{mdText}</Typography>
            <Typography {...props} sx={{ display: { xs: 'none', sm: 'block', md: 'none', textWrap: "nowrap", ...sx } }}>{smText}</Typography>
            <Typography {...props} sx={{ display: { xs: 'block', sm: 'none', md: 'none', textWrap: "nowrap", ...sx } }}>{xsText}</Typography>
        </>
    );
}

export const ResponsiveElement = ({ mdEl, smEl, xsEl, sx = {}, ...props }) => {
    if(smEl === undefined) smEl = mdEl;
    if(xsEl === undefined) xsEl = smEl;
    return (
        <>
            <Box {...props} sx={{ display: { xs: 'none', sm: 'none', md: 'block', ...sx } }}>{mdEl}</Box>
            <Box {...props} sx={{ display: { xs: 'none', sm: 'block', md: 'none', textWrap: "nowrap", ...sx } }}>{smEl}</Box>
            <Box {...props} sx={{ display: { xs: 'block', sm: 'none', md: 'none', textWrap: "nowrap", ...sx } }}>{xsEl}</Box>
        </>
    );
}

export const SSADivider = ({className = "svg-divider"}) => <Box className={className} sx={{p: '15px'}}><SSADividerSVG /></Box>

export const BoxFixedWidth = ({children}) => (
    <div className="h-center">
        <div className="box-fixed">
            {children}
        </div>
    </div>
)

export const FollowIcon = ({text, icon, link}) => (
    <div className="follow-logo font-fm" onClick={() => window.open(link, "_blank")}>
        <Icon icon={icon}/>
        <div>{text}</div>
    </div>
)

export const PrimeMusicIcon = ({ap, apn}) => {
    const { i, l } = ap;
    const { n, n2 } = apn
    return (
    <div className="follow-logo font-fm" onClick={() => window.open(l, "_blank")}>
        <div className="h-center">
            <div className="prime-music">
                <Icon icon={i} style={{fontSize: '50px'}}/>
            </div>
        </div>
        <ResponsiveTypography mdText={n} smText={n2}  className="font-fm" sx={{fontSize: '20px'}}/>
    </div>
    )
}

export const Md = ({children: text}) => {
    text = text.replace(/\\n/g, '\n')
    return  <Markdown>{text}</Markdown>
}

export const SSASkeleton = ({bg="transparent", width="100%", height="100%"}) => (
    <Skeleton
          variant="rectangular"
          width={width}
          height={height}
          animation="wave"
          sx={{
            opacity: 0.3,
            background: bg,
            '::after': {
                background: 'linear-gradient(90deg, transparent, #ffffff8a, transparent)',
            }
          }}
    />
)
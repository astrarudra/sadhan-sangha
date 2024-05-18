import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactComponent as SSADividerSVG } from '../assets/ssaDivider.svg';
import { ReactComponent as SSALogo } from '../assets/ssaLogo.svg';

export const SSALogoIcon = ({variant = 'variant-brown', sx}) => {
    return <Box className={`logo-wrap ${variant}`} sx={sx}>
        <SSALogo />
    </Box>
}

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
    <div style={{display: 'flex', justifyContent: "center"}}>
        <div style={{maxWidth: '1000px', textAlign: "center"}}>
            {children}
        </div>
    </div>
)

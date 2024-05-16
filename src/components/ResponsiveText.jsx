import Typography from '@mui/material/Typography';

const ResponsiveTypography = ({ mdText, smText, xsText, sx = {}, ...props }) => {
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

export default ResponsiveTypography;
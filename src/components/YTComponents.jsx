import { ResponsiveTypography } from "./UIElements"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Icon } from '@iconify/react';

const ytList = 'https://www.youtube.com/playlist?list='
const ytEmbed = 'https://www.youtube.com/embed/'

/* if src is passed, embed will not be in effect - Making it very much reusable.
   embed - pass the string after 'youtube.com/embed/'
*/
export const YTIFrame = ({title, embed = '', ...props}) => <iframe width="100%" height="100%" src={ytEmbed + embed} title="Latest Video Satsang" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen {...props}></iframe>

export const YTPlaylistBox = ({data: {l, t, st}}) => {
    return <div  onClick={() => window.open(ytList + l, "_blank")} className="iframe-header font-fm" style={{borderRadius: '12px', cursor: 'pointer', marginBottom: '5px'}}>
        <ResponsiveTypography mdText={t} xsText={st} className="font-fm"/>
        <div style={{marginLeft: "auto"}}></div>
        <OpenInNewIcon style={{paddingLeft: '10px'}}/>
    </div>
}

export const YTHeader = ({link, mdText, xsText="", linkText, iconify = 'logos:youtube-icon'}) => {
    return <div className="iframe-header font-fm" onClick={() => window.open(link, "_blank")}>
        <Icon icon={iconify} style={{paddingRight: '10px'}}/>
        <ResponsiveTypography mdText={mdText} xsText={xsText}  className="font-fm"/>
        <div style={{marginLeft: "auto"}}>{linkText}</div>
        <OpenInNewIcon style={{paddingLeft: '10px'}}/>
    </div>
}
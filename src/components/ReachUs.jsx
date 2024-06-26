import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useStore } from '../appStore';

const ReachUs = ({
        header = true, 
        sx = { maxWidth: '180px'}, 
        classes={ parent: "v-center footer-social", icon: "footer-social-icons"}
    }) => {
    const [texts, contactDetails] = useStore(s => [s.texts, s.config.contactDetails])
    const { headers } = texts
    const { location, gmap, phone, email } = contactDetails
    const phoneLink = `tel:${phone.replaceAll(' ','')}`
    const emailLink = `mailto:${email}`
    return (<div style={sx}>
        {header && <div className="footer-header">{headers.reachUs}</div>}
        <div className={classes.parent} style={{alignItems: 'normal'}} onClick={() => window.open(gmap, "_blank")}>
            <PlaceIcon className={classes.icon} style={{height: '100%', color: 'red'}}/>
            <div>{location}</div>
        </div>
        <div className={classes.parent}>
            <PhoneIcon className={classes.icon} style={{color: 'green'}} onClick={() => window.open(phoneLink)}/>
            <div>{phone}</div>
        </div>
        <div className={classes.parent} onClick={() => window.open(emailLink)}>
            <EmailIcon className={classes.icon} />
            <div>{email}</div>
        </div> 
    </div>
    )
}

export default ReachUs;
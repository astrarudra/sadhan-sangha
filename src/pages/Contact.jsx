import React from 'react';
import { Icon } from '@iconify/react';
import ReachUs from "../components/ReachUs"
import { BoxFixedWidth, SSADivider } from '../components/UIElements';
import { Box } from '@mui/material';
import { YTHeader } from '../components/YTComponents';
import { contactDetails, imgurImages } from '../constants';


const ContactPage = () => {
    const { gmap } = contactDetails
    return (
        <BoxFixedWidth>
            <h1>Contact</h1>
            <div className="card">
                <Box className="d-flex" sx={{display: { xs: "block", sm: "flex"}}}>
                    <div className="f1">
                        <YTHeader mdText="Google Map" xsText="Google Map" link={gmap} linkText="" iconify='logos:google-icon'/>
                        <Box sx={{height: { xs: "200px", sm: "450px"}}}>
                            <iframe 
                                title="Saghan Sangha Ashram Location Google Map" 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6905.53012522406!2d78.2485447!3d30.0722681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f52f2fccf5d%3A0x800ed8e1721cf8c6!2sSadhan%20Sangha%20Ashram!5e0!3m2!1sen!2sin!4v1715953540617!5m2!1sen!2sin" 
                                width="100%" height="100%" 
                                style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                >
                            </iframe>
                        </Box>
                    </div>
                    <div style={{width: '10px', height: '10px'}}></div>
                    <div className="f1" style={{textAlign: 'left'}}>
                       <ReachUs
                            header={false} 
                            sx={{}} 
                            classes={{parent: "v-center contact-parent", icon: "v-center contact-icon"}}
                        />
                        <SSADivider className='svg-divider dark-varient'/>
                        <div className="d-flex" style={{width: '100%', justifyContent: 'center'}}>
                            <Box className="shiva-footer" style={{position: 'inherit', width: '35%'}}>
                                <img src={imgurImages.shiva} alt="Shiva Sandhan Sangha Ashram" width="100%"/>
                            </Box>
                        </div>
                    </div>
                </Box>
            </div>
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default ContactPage;
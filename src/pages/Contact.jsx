import React from 'react';
import { Icon } from '@iconify/react';
import ReachUs from "../components/ReachUs"
import { BoxFixedWidth, SSADivider } from '../components/UIElements';
import { Box } from '@mui/material';
import { YTHeader } from '../components/YTComponents';
import { contactDetails, imgurImages } from '../constants';
import IFrameLazy from '../components/IFrameLazy';


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
                            <IFrameLazy src={contactDetails.gmapEmbed} title={contactDetails.title} load={true}/>
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
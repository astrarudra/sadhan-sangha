import React from 'react';
import { Icon } from '@iconify/react';
import ReachUs from "../components/ReachUs"
import { BoxFixedWidth, SSADivider } from '../components/UIElements';


const ContactPage = () => {
    return (
        <BoxFixedWidth>
            <h1>Contact</h1>
            <div className="card">
                <div className="d-flex">
                    <div style={{width: '50%'}}>
                        <div className="iframe-header font-freeman">
                            <Icon icon="logos:google-icon" style={{paddingRight: '10px'}}/>
                            <div className='font-freeman'>Google Map</div>
                        </div>
                        <iframe 
                            title="Saghan Sangha Ashram Location Google Map" 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6905.53012522406!2d78.2485447!3d30.0722681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f52f2fccf5d%3A0x800ed8e1721cf8c6!2sSadhan%20Sangha%20Ashram!5e0!3m2!1sen!2sin!4v1715953540617!5m2!1sen!2sin" 
                            width="100%" height="450" 
                            style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            >
                        </iframe>
                    </div>
                    <div className="f1" style={{textAlign: 'left', paddingLeft: '20px'}}>
                       <ReachUs
                            header={false} 
                            sx={{}} 
                            classes={{parent: "v-center contact-parent", icon: "v-center contact-icon"}}
                        />
                        <SSADivider className='svg-divider dark-varient'/>
                    </div>
                </div>
            </div>
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default ContactPage;
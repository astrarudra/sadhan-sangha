import React, { useEffect } from 'react';
import { BoxFixedWidth, InitLoader, Md, SSADivider } from '../components/UIElements';
import { Controller, useStore } from '../appStore';


const PrivacyContent = ({privacy, contactDetails}) => {
    const { location, gmap, phone, email } = contactDetails
    const phoneLink = `tel:${phone.replaceAll(' ','')}`
    const emailLink = `mailto:${email}`
    return (
        <div className="t-left">
            <Md>{privacy.main}</Md>
            <b>Contact Information:</b><br />
            Email: <a href={emailLink}>{email}</a><br />
            Phone: <a href={phoneLink}>{phone}</a><br />
            Location: <a href={gmap}>{location}</a><br />
            <Md>{privacy.conclusion}</Md>
        </div>
    );
}

const PrivacyPage = () => {
    const [privacy, contactDetails, footer] = useStore(s => [s.data.privacy, s.config.contactDetails, s.texts.footer])
    useEffect(() => {
        if(!privacy) Controller.loadPrivacy()
    }, [privacy])
    return (
        <BoxFixedWidth>
            <h1>{footer.privacy}</h1>
            <div className="d-flex card">
                {privacy ? <PrivacyContent privacy={privacy} contactDetails={contactDetails} />
                : <div className="h-center f1">
                   <InitLoader className="d-center" />
                </div>
                }
            </div>
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default PrivacyPage;
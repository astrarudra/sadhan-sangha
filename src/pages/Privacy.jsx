import React from 'react';
import { BoxFixedWidth, SSADivider } from '../components/UIElements';
import { useStore } from '../appStore';


const PrivacyPage = () => {
    const [contactDetails, footer] = useStore(s => [s.config.contactDetails, s.texts.footer])
    const { location, gmap, phone, email } = contactDetails
    const phoneLink = `tel:${phone.replaceAll(' ','')}`
    const emailLink = `mailto:${email}`
    return (
        <BoxFixedWidth>
            <h1>{footer.privacy}</h1>
            <div className="card" style={{textAlign: 'left'}}>
                Updated on 19th May, 2024
                <br />
                <br />
                We are a not-for-profit, volunteer-run organization dedicated to providing spiritual guidance and wisdom to seekers around the world. This Privacy Policy outlines how we handle your information on our website. We value your privacy and are committed to maintaining the highest standards of data protection.<br />
                <br />
                <b>Data Collection</b><br />
                <br />
                We do not collect any personal data from our visitors. Our website is completely open-source and static, ensuring your privacy is safeguarded. We do not use cookies, and we do not track your browsing activities.<br />
                <br />
                <b>Website Operation</b><br />
                <br />
                Our website is run and maintained by devoted volunteers of Sadhan Sangha Ashram. The Ashram operates solely on the generous donations and charity from its devotees. All content, including images and text, is provided to support our mission of spreading spiritual knowledge and tranquility.<br />
                <br />
                <b>Image Usage</b><br />
                <br />
                The images on our website are free for personal use. If you wish to use any images for other purposes, please contact us for permission. We are committed to respecting the intellectual property rights of our contributors and ensuring that their work is used appropriately.<br />
                <br />
                <b>Changes to This Policy</b><br />
                <br />
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our privacy practices.<br />
                <br />
                <b>Contact Us</b><br />
                <br />
                If you have any questions or concerns about our Privacy Policy or any other aspect of our website, please feel free to contact us. We are here to assist you and ensure that your experience with Sadhan Sangha Ashram is positive and fulfilling.<br />
                <br />
                <b>Contact Information:</b><br />
                Email: <a href={emailLink}>{email}</a><br />
                Phone: <a href={phoneLink}>{phone}</a><br />
                Location: <a href={gmap}>{location}</a><br />
                <br />
                Thank you for visiting Sadhan Sangha Ashram Website. We appreciate your support and are grateful for your trust in our community.<br />
                <br /> 
            </div>
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default PrivacyPage;
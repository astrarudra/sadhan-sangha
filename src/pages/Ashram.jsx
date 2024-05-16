import React from 'react';
import Box from '@mui/material/Box';
import { FollowUsSection } from '../components/HomeSections'
import { SSADivider } from '../components/UIElements';

export const AshramSection = () => {
    return <div style={{position: 'relative'}}>
        <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure><img src="https://i.imgur.com/0fOBbqh.jpg" alt="Ashram" style={{width: '100%'}}/></figure>
        </div>
        <div style={{padding: '40px 20px'}}>
            <div style={{display: 'flex'}}>
                <div style={{width: '30%'}}>
                    
                </div>
                <Box sx={{textAlign: 'left', flex: 1}}>
                    Discover serenity and spiritual guidance nestled between the enchanting realms of Rishikesh and Haridwar at Sadhan Sangha Ashram. Here, amidst the tranquil embrace of nature, seekers find solace and wisdom under the compassionate guidance of the venerable Yogi 108 Swami Sachchidananda Saraswati.<br /><br />
                    In the mystical year of 1970, the revered Swami embarked on a pilgrimage through North India. Entranced by the celestial beauty of the region between Haridwar and Rishikesh, he felt a profound connection to the divine essence, envisioning it as the very abode of Lord Shiva himself. Inspired by this divine encounter, Swami Sachchidananda Saraswati resolved to establish an Ashram near the Virbhadra railway station, expressing his gratitude to his devoted disciples, Choudhury Saheb and Kapoor Saheb.<br /><br />
                    The journey of Sadhan Sangha Ashram began as a humble cottage with a solitary well beside it when Swami Sachchidananda Saraswati first graced its grounds in 1979. Over the years, with unwavering dedication and divine grace, the Ashram blossomed into a sanctuary of spiritual nourishment and inner peace.<br /><br />
                    In the auspicious year of 1984, the Mandir within the Ashram was consecrated, marking a sacred milestone in its journey. The statue of Guruji was unveiled on the sacred day of 2nd November, symbolizing the eternal presence of wisdom and enlightenment within these hallowed grounds.<br /><br />
                    Today, under the guidance of the present Guruji, Sadhan Sangha Ashram continues to illuminate the path of seekers, offering a haven for spiritual growth and self-discovery. Whether you seek refuge, seek wisdom, or simply seek solace amidst the chaos of life, the gates of Sadhan Sangha Ashram stand open, welcoming all who yearn for the serenity of the soul.
                </Box>
            </div>
        </div>
    </div>
}

const AshramPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: "center"}}>
            <div style={{maxWidth: '1000px', textAlign: "center"}}>
                <h1>The Ashram</h1>
                <AshramSection />
                <SSADivider />
                <h1>Follow Us</h1>
                <FollowUsSection />
                <SSADivider />
            </div>
        </div>
    );
};

export default AshramPage;
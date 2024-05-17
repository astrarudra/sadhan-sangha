import React, {useEffect, useState, useRef} from 'react';
import Box from '@mui/material/Box';
import { FollowUsSection } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth } from '../components/UIElements';
import { useStore } from '../appStore';
import Button from '@mui/material/Button';
import ImgurViewer from '../components/ImgurViewer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';

const calcMaxRows = (clientHeight) => parseInt(clientHeight / 250);

export const AshramSection = () => {
    const [gallery] = useStore(s => [s.config.gallery])
    const { albums } = gallery;
    const textRef = useRef(null);
    const [maxRows, setMaxRows] = useState(2);
  
    useEffect(() => {
      const handleResize = () => {
        if (!textRef.current) return
        const newMaxRows = calcMaxRows(textRef.current.clientHeight);
        setMaxRows(newMaxRows);
      };
      window.addEventListener('resize', handleResize);
      if (textRef.current) {
        const newMaxRows = calcMaxRows(textRef.current.clientHeight);
        if(newMaxRows !== maxRows) setMaxRows(newMaxRows);
      }
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return <div style={{position: 'relative'}}>
        <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure><img src="https://i.imgur.com/0fOBbqh.jpg" alt="Ashram" style={{width: '100%'}}/></figure>
        </div>
        <div style={{padding: '40px 20px'}}>
            <div class="card d-flex">
                <div style={{width: '40%', minWidth: '150px'}}>
                    <ImgurViewer images={gallery[albums.ashram.key]} maxRows={maxRows} rowHeight={250} sort={false}/>
                    <div style={{ textAlign: 'center', paddingTop: "15px"}}>
                        <Link to={'/gallery'} style={{textDecoration: "none", color: "inherit"}}>
                            <Button sx={{width: '100%'}} className="btn-primary" size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>View Gallery</Button>
                        </Link>
                    </div>
                </div>
                <Box ref={textRef} sx={{textAlign: 'left', flex: 1, paddingLeft: '15px', height: "max-content"}}>
                    <SSADivider className='svg-divider dark-varient'/>
                    <div>
                        Discover serenity and spiritual guidance nestled between the enchanting realms of Rishikesh and Haridwar at Sadhan Sangha Ashram. Here, amidst the tranquil embrace of nature, seekers find solace and wisdom under the compassionate guidance of the venerable Yogi 108 Swami Sachchidananda Saraswati.<br /><br />
                        In the mystical year of 1970, the revered Swami embarked on a pilgrimage through North India. Entranced by the celestial beauty of the region between Haridwar and Rishikesh, he felt a profound connection to the divine essence, envisioning it as the very abode of Lord Shiva himself. Inspired by this divine encounter, Swami Sachchidananda Saraswati resolved to establish an Ashram near the Virbhadra railway station, expressing his gratitude to his devoted disciples, Choudhury Saheb and Kapoor Saheb.<br /><br />
                        The journey of Sadhan Sangha Ashram began as a humble cottage with a solitary well beside it when Swami Sachchidananda Saraswati first graced its grounds in 1979. Over the years, with unwavering dedication and divine grace, the Ashram blossomed into a sanctuary of spiritual nourishment and inner peace.<br /><br />
                        In the auspicious year of 1984, the Mandir within the Ashram was consecrated, marking a sacred milestone in its journey. The statue of Guruji was unveiled on the sacred day of 2nd November, symbolizing the eternal presence of wisdom and enlightenment within these hallowed grounds.<br /><br />
                        Today, under the guidance of the present Guruji, Sadhan Sangha Ashram continues to illuminate the path of seekers, offering a haven for spiritual growth and self-discovery. Whether you seek refuge, seek wisdom, or simply seek solace amidst the chaos of life, the gates of Sadhan Sangha Ashram stand open, welcoming all who yearn for the serenity of the soul.
                    </div>
                    <SSADivider className='svg-divider dark-varient'/>
                </Box>
            </div>
        </div>
    </div>
}

const AshramPage = () => {
    return (
        <BoxFixedWidth>
            <h1>The Ashram</h1>
            <AshramSection />
            <SSADivider />
            <h1>Follow Us</h1>
            <FollowUsSection />
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default AshramPage;